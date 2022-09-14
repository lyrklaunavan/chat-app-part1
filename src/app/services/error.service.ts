import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private _swal: SwalService
  ){}

  errorHandler(err: HttpErrorResponse){
    if (err.status == 400) {
      this._swal.toastCagir(err.error,"Error!","error")
    }

    if (err.status == 404) {
      this._swal.toastCagir("Not found api","Error!","error")
    }
  }
}
