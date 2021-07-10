import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '@app/interface/articulo.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  rutaApi = "http://www.mastrosoft.com.ar/api/public/neumaticos";

  getAll(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.rutaApi}`);
  }

  getById(id: number) {
    return this.http.get<Articulo[]>(`${this.rutaApi}/${id}`)
      .pipe(map(articulo => articulo[0]))
  }

  delete(id: number) {
    return this.http.delete<any>(`${this.rutaApi}/delete/${id}`);
  }
}
