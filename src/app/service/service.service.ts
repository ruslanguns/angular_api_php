import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/// api token WG1OQZPA37SZCJBIJ5WAETHZEAFP25IE

/*
const cudOptions = {headers: new HttpHeaders(
  {
    'Content-Type': 'application/json',
  }
)}
*/
@Injectable({
  providedIn: 'root'
})
export class productosService {

  constructor(
    private http: HttpClient
  ) { }

  rutaApi = "http://www.mastrosoft.com.ar/api/public/productos/neumaticos";


  getAll(){
    return this.http.get<any>(`${this.rutaApi}`); 
  }

  getById(id: number){
    return this.http.get<any>(`${this.rutaApi}/${id}`);
  }

  delete(id: number){
    return this.http.delete<any>(`${this.rutaApi}/delete/${id}`);
  }
}
