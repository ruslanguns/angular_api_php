import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '@app/interface/articulo.interface';
@Injectable({
  providedIn: 'root'
})
export class productosService {

  constructor(
    private http: HttpClient
  ) { }

  rutaApi = "http://www.mastrosoft.com.ar/api/public/neumaticos";
  //rutaApi = "http://localhost/www/api_gestion_slim3/public/neumaticos";

  getAll(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.rutaApi}`);
  }

  getById(id: number) {
    return this.http.get<any>(`${this.rutaApi}/${id}`);
  }

  delete(id: number) {
    return this.http.delete<any>(`${this.rutaApi}/delete/${id}`);
  }
}
