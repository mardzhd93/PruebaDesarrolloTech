import { Injectable, Input } from '@angular/core';
import { Permiso } from './permiso.model';
import { HttpClient } from "@angular/common/http"
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {

  formData: Permiso = new Permiso;
  readonly rootURL = "https://localhost:44322/api/"

  constructor(private http: HttpClient) { }

  postPermiso(formData : Permiso){
   return this.http.post(this.rootURL+'Permisos',formData)
    
  }
}
