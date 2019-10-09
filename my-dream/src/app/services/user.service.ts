import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInformation } from '../model/user-information';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  public registration(user: any) {
    return this.http.post('http://localhost:8080/fundooapp/registration', user, this.httpOptions);
    console.log('entered into registeruser in service');
  }



  public login(user: any) {
    return this.http.post('http://localhost:8080/fundooapp/login', user, this.httpOptions);
    console.log('entered into registeruser in service');
  }


  public sendEmail(user: any) {
    console.log(user);
    return this.http.post('http://localhost:8080/fundooapp/forgotpassword?email=' + user.username, this.httpOptions);
    console.log('entered into registeruser in service');
  }

  public updatePassword(user: any, token: string) {
    console.log(user);
    return this.http.put('http://localhost:8080/fundooapp/update/' + token, user, this.httpOptions);
    console.log('entered into registeruser in service');
  }


}
