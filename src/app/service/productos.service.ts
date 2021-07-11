import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '@app/interface/articulo.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  apiRest = "http://www.mastrosoft.com.ar/api/public/neumaticos";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.apiRest}`);
  }

  getById(id: number) {
    return this.http.get<Articulo[]>(`${this.apiRest}/${id}`)
      .pipe(map(articulo => articulo[0]))
  }

  delete(id: number) {
    return this.http.delete<any>(`${this.apiRest}/delete/${id}`);
  }

  save(data: Articulo) {
    return this.http.post(`${this.apiRest}/nuevo`, data);
  }
}
