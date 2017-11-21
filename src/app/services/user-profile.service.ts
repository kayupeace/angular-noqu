import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserProfileService {
  private profileUrl = 'http://127.0.0.1:5000/api/user/profile';  // URL to web api
  private loginUrl = 'http://127.0.0.1:5000/api/login';
  constructor(
    private http: HttpClient) { }
    /**
  getUserProfile(): Observable<Hero[]> {
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl);
  }
     **/
    private body = {
      email : 'aaa',
      password : 'aaa',
   };
  getUserProfile(): void {
    this.http.get(this.profileUrl).subscribe(data => {
      console.log(data);
    });
    return;
  }
  login(): void {
    this.http.post(this.loginUrl, this.body).subscribe(data => {
      console.log(data);
    });
    console.log('Login');
    return;
  }
}
