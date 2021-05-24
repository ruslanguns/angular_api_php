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
  onEditArticulo(data: Articulo): void {
    const { cod_Articulo } = data;
    alert('Editar Art : '+cod_Articulo);
  }

  onDeleteArticulo(data: Articulo): void {
    //this.prodcSrv.delete(id).subscribe( res => 
    //  console.log("Respuesta -> ", res)
    //);
    const { cod_Articulo } = data;
    alert('Delete Art : '+cod_Articulo);
  }

}
