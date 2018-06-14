export interface AppUserProfile {
    id: string;
    sub: string;
    sid: string;
    role: string | string[];
    exp: number;
}

export class AppUser {
    public isAuthenticated = false;
    public securityToken: string;
    public tokenType: string;
    public profile?: AppUserProfile;
}
