import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/// api token WG1OQZPA37SZCJBIJ5WAETHZEAFP25IE

@Injectable({
  providedIn: 'root'
})
export class productosService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(){
    return this.http.get<any>('https://www.mastrosoft.com.ar/api/public/productos/neumaticos'); 
  }

  getById(id: number){
    return this.http.get<any>('https://www.mastrosoft.com.ar/api/public/productos/neumaticos/'+id);
  }

  delete(id: number){
    return this.http.delete<any>('https://www.mastrosoft.com.ar/api/public/productos/neumaticos/'+id);
  }
}
