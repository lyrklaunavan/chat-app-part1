import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
