import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SignInDto } from './sign-in.dto';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SignInService {

  constructor(private http: HttpClient) { }

  private signInUrl = `${environment.apiRootUri}/auth/sign-in`;

  signIn(signInDto: SignInDto): Observable<any> {
    console.log(this.signInUrl);
    return this.http.post(this.signInUrl, signInDto, httpOptions);
  }

}
