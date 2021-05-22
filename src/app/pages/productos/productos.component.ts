import { Component, OnInit } from '@angular/core';
import { productosService } from '@app/service/service.service';
import { Articulo } from '@app/interface/articulo.interface';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  articulos : Articulo;

  constructor(
    private prodcSrv: productosService, 
  ) { }

  ngOnInit(): void{
    this.prodcSrv.getAll().subscribe( res => 
      this.articulos = res
    );
  }
  onEditArticulo(id :number): void {
    console.log('Editar Articulo', id);
  }

}
