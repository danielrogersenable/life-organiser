import { EventEmitter, Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
import {
    User as OidcClientUser,
    UserManager as OidcClientUserManager,
    WebStorageStateStore
} from 'oidc-client';
import { Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { AppUser, AppUserProfile } from './app-user';

const USER_STORAGE_KEY_PREFIX = 'app:';
const USER_STORAGE = localStorage;

@Injectable()
export class UserManager {
    constructor() {
        this._manager = new OidcClientUserManager({
            authority: '',
            client_id: '',
            automaticSilentRenew: false,
            monitorSession: false,
            userStore: new WebStorageStateStore({
                prefix: USER_STORAGE_KEY_PREFIX,
                store: USER_STORAGE
            })
        });

        this._manager.events.addAccessTokenExpiring(() => {
            this.refreshToken.emit();
        });

        this._manager.events.addAccessTokenExpired(() => {
            this.removeUser();
        });

        addEventListener('storage', e => this.handleStorageEvent(e));

        this.publishUser();
    }

    public readonly refreshToken = new EventEmitter();

    private readonly _manager: OidcClientUserManager;
    private readonly _user = new ReplaySubject<AppUser>(1);

    get user(): Observable<AppUser> {
        return this._user.asObservable();
    }

    get isAuthenticated(): Observable<boolean> {
        return this.user.pipe(
            map(user => user && user.isAuthenticated),
            distinctUntilChanged()
        );
    }

    public setUser(user: AppUser): void {
        const token = jwtDecode(user.securityToken) as AppUserProfile;

        const userToStore = new OidcClientUser({
            access_token: user.securityToken,
            expires_at: token.exp || 0,
            token_type: user.tokenType,
            profile: token
        } as any);

        this._manager.storeUser(userToStore).then(() => this.publishUser());
    }

    public removeUser(): void {
        this._manager.removeUser().then(() => this.publishUser());
    }

    private publishUser(): void {
        this._manager.getUser().then(storedUser => {
            const user = new AppUser();

            if (storedUser && !storedUser.expired) {
                user.isAuthenticated = true;
                user.securityToken = storedUser.access_token;
                user.tokenType = storedUser.token_type;
                user.profile = storedUser.profile;
            }

            this._user.next(user);
        });
    }

    private handleStorageEvent(e: StorageEvent): void {
        if (
            e.storageArea === USER_STORAGE &&
            e.key &&
            e.key.indexOf(`${USER_STORAGE_KEY_PREFIX}user`) === 0
        ) {
            this.publishUser();
        }
    }
}
