//creacion del servicio
import { Injectable } from '@angular/core';
//conexion del servicio
import { HttpClient, HttpHeaders } from '@angular/common/http';
//parametros
import {  Observable, throwError } from 'rxjs';
//capturacion de errores
import { catchError } from 'rxjs/operators';
//pasamos varibles
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class Users {
  
  private apiUrl = "http://localhost:8000/api/user";

  //configuraciones de header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

constructor(private httpClient: HttpClient){}
//creacion del crud
getAll(): Observable<User[]> {
  return this.httpClient.get<User[]>(this.apiUrl)
  .pipe(
    catchError(this.errorHandler)
    )
  }
  create(user: any): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id: number): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: number, user: any): Observable<User> {
    return this.httpClient.put<User>(this.apiUrl + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number){
    return this.httpClient.delete<User>(this.apiUrl + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => error);
  }
}