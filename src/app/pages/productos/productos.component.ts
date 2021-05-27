import { Component, OnInit } from '@angular/core';
import { productosService } from '@app/service/service.service';
import { Articulo } from '@app/interface/articulo.interface';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  articulos : Articulo;
  data:any = {};

  constructor(
    private prodcSrv: productosService, 
    private route: Router
  ) { }

  ngOnInit(): void{
    this.prodcSrv.getAll().subscribe( res => 
      this.articulos = res
    );
  }
  onEditArticulo(data: Articulo): void {
    const { cod_Articulo } = data;
    alert('Editar Art : '+cod_Articulo);
  }

  onDeleteArticulo(data: Articulo): void {
    const { id } = data;
    this.prodcSrv.delete(id).subscribe( res =>
      {
        this.data = res;
        if (this.data.status == "200"){
          alert(`Respuesta : => ${this.data.message}`);
        }else{
          alert(`Respuesta : => ${this.data.message}`);
        }
        this.prodcSrv.getAll().subscribe( res => 
          this.articulos = res
        );
        
      }
    );
  }
}
