import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class productosService {
  
  ///headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8').append('Authorization', 'Bearer');

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>('https://www.mastrosoft.com.ar/api/public/productos/neumaticos'); 
  }

  getById(id: number){
    return this.http.get<any>('https://www.mastrosoft.com.ar/api/public/productos/neumaticos/${id}');
  }
}
