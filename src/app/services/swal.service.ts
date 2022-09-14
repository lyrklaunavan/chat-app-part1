import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  toastCagir(message: string,title:string, type: any){
    const Toast = Swal.mixin({
     toast: true,
      position: 'top-end',
      timer: 3000,
      timerProgressBar: true,
      showCancelButton: false,
      showConfirmButton: false,
      //color: "red",
      //background: "yellow"
    })
    Toast.fire(message, title, type)
 }


swalCagir(message: string, title:string, btnName: string){
   const swal = Swal.fire({
     showCancelButton: true,
     showConfirmButton: true,
     confirmButtonText: btnName,
     text: message,
     title: title
   });

   return swal;
 }
}
