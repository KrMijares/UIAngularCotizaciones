import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMonedasService {

  constructor(
    private http: HttpClient,
  ) { }

  consultarDolar() {
    return this.http.get( 'http://localhost:63778/cotizacion/dolar',
      {headers: this.obtenerCabeceras()}).toPromise();
  }

  consultarEuro() {
    return this.http.get( 'http://localhost:63778/cotizacion/euro',
      {headers: this.obtenerCabeceras()}).toPromise();
  }

  consultarReal() {
    return this.http.get( 'http://localhost:63778/cotizacion/real',
      {headers: this.obtenerCabeceras()}).toPromise();
  }

  obtenerCabeceras () {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }
}
