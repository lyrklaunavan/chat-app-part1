import { Component, OnInit } from '@angular/core';
import { DecodeService } from 'src/app/services/decode.service';
import { ErrorService } from 'src/app/services/error.service';
import { environment } from 'src/environments/environment';
import { ChatUserModel } from './models/chat-user.model';
import { ChatService } from './services/chat.service';
12345
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId: number = 0;
  userName: string = "";
  chatUsers: ChatUserModel[] = [];
  fileUrl: string = environment.fileUrl;

  constructor(
    private _decode: DecodeService,
    private _chat: ChatService,
    private _err: ErrorService
  ) { }

  ngOnInit(): void {
    this.userId = this._decode.getUserId();
    this.userName = this._decode.getUserName();
    this.getUserList();
  }

  getUserList(){
    this._chat.getUserList(this.userId).subscribe({
      next: (res)=> this.chatUsers = res.data,
      error: (err)=> this._err.errorHandler(err)
    })
  }

}
