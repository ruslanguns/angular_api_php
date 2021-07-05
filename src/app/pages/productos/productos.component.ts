import { Component, OnInit } from '@angular/core';
import { productosService } from '@app/service/service.service';
import { Articulo } from '@app/interface/articulo.interface';
import { Router } from '@angular/router';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  articulos: Articulo[];
  data: any = {};

  constructor(
    private prodcSrv: productosService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.prodcSrv.getAll()
      .pipe(
        tap(articulos => this.articulos = articulos)
      )
      .subscribe();
  }

  onEditArticulo(data: Articulo): void {
    const { cod_Articulo } = data;
    alert('Editar Art : ' + cod_Articulo);
  }

  onViewArticulo(data: Articulo): void {
    const { id } = data;
    this.prodcSrv.getById(id)
      .pipe(
        tap(articulos => this.articulos = articulos)
      ).subscribe();
  }

  onNew(): void {

  }

  onDeleteArticulo(data: Articulo): void {
    const { id } = data;
    let mensaje = "Esta seguro ?";

    if (confirm(mensaje)) {
      this.prodcSrv.delete(id).subscribe(res => {
        this.data = res;

        if (this.data.status == 200) {
          alert(`Respuesta : => ${this.data.message}`);
        } else {
          alert(`Respuesta : => ${this.data.message}`);
        }

        this.prodcSrv.getAll().subscribe(res =>
          this.articulos = res
        );
      }
      );
    }
  }


}
