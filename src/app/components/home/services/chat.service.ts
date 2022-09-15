import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private _http: HttpClient
  ) { }

  getUserList(userId: number){
    let api = environment.apiUrl + "chats/GetChatUserList/" + userId;
    return this._http.get<any>(api);
  }
}
