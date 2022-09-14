import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorService } from 'src/app/services/error.service';
import { SwalService } from 'src/app/services/swal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;

  constructor(
    private _swal: SwalService,
    private _auth: AuthService,
    private _err: ErrorService
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    if (!form.valid) {
      this._swal.toastCagir("Fill in the required fields","Error!","error")
      return;
    }
    this.isLoading = true
    this._auth.login(form.value).subscribe({
      next: (res)=> {
        console.log(res)
        this.isLoading = false
      },
      error: (err)=> {
        this.isLoading = false
        this._err.errorHandler(err)
        console.log(err)
      }
    });
    
    
  }

  inputValidKontrol(form: NgForm, input: string){  
    if (form.controls[input] == undefined ? false : form.controls[input].untouched) {      
      return "form-control";
    }

    if (form.controls[input] == undefined ? false : form.controls[input].valid) {
      return "form-control is-valid"
    }
   
    return "form-control is-invalid"
  }
}
