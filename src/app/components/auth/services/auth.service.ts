import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient
  ) { }

    login(model: LoginModel){
      let api = this.apiUrl + "ChatAuth/login";
      return this._http.post<any>(api,model);
    }
}
