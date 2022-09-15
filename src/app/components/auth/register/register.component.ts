import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  img: any;
  text: string = "";
  readerImg: any;
  // list: string[] = [
  //   "List 1",
  //   "List 2",
  //   "List 3",
  //   "List 4",
  //   "List 5",
  //   "List 6",
  //   "List 7",
  // ]

  selectedItem: string = "List 1";
  constructor() { }

  ngOnInit(): void {
  }

  setImage(img: any){
    this.img = img.files[0]  
    console.log(this.img)  
    let _reader = new FileReader();
    _reader.onload = (event:any) => this.readerImg = event.target.result
    _reader.readAsDataURL(this.img)    
  }

  // setSelectedItem(event: any){
  //   console.log(event.target.selected.value);  
  // }

  signUp(form: NgForm){
    let formData = new FormData();
    formData.append("name",form.value.name);
    formData.append("email",form.value.email);
    formData.append("password",form.value.password);
    formData.append("image",this.img,this.img.fileName);
  }

}
