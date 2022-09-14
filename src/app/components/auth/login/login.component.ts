import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwalService } from 'src/app/services/swal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _swal: SwalService
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    if (!form.valid) {
      this._swal.toastCagir("Fill in the required fields","Error!","error")
      return;
    }

    console.log(form.value);
    
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
