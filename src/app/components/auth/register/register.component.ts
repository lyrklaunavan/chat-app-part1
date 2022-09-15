import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  img: any;
  list: string[] = [
    "List 1",
    "List 2",
    "List 3",
    "List 4",
    "List 5",
    "List 6",
    "List 7",
  ]

  selectedItem: string = "List 1";
  constructor() { }

  ngOnInit(): void {
  }

  setImage(img: HTMLInputElement){
    //console.log(img.files?[0]): undefined
  }

  setSelectedItem(event: any){
    console.log(event.target.selected.value);  
  }

  signUp(){
    console.log(this.selectedItem)
  }

}
