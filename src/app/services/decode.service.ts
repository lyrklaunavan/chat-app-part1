import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class DecodeService {

  _jwt: JwtHelperService = new JwtHelperService();


  constructor() { }

  getUserName(){
    var decode = this._jwt.decodeToken(localStorage.getItem("token"));
    let userNameId = Object.keys(decode).filter(p=> p.endsWith("name"))[0];
    let userName = decode[userNameId]
    return userName;
  }

  getUserId(){
    var decode = this._jwt.decodeToken(localStorage.getItem("token"));
    console.log(decode);
    let userIdId = Object.keys(decode).filter(p=> p.endsWith("nameidentifier"))[0];
    let userId = decode[userIdId]
    return userId;
  }
}
