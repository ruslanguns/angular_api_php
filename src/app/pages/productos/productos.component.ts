import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductosService } from '@app/service/productos.service';
import { Articulo } from '@app/interface/articulo.interface';
import { Router } from '@angular/router';
import { tap } from "rxjs/operators";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  @ViewChild("myModalInfo", { static: false }) myModalInfo: TemplateRef<any>;

  articulos: Articulo[];
  articulo: Articulo;
  imagen = "";

  get urlImage() {
    if (this.articulo) {
      return `${environment.apiUrl}/imgProducto/${this.articulo.cod_Articulo}.jpg`
    }
  }

  constructor(
    private prodcSrv: ProductosService,
    private route: Router,
    private modalService: NgbModal
  ) { }

  formulario = new FormGroup({
    modelo: new FormControl(''),
    medida: new FormControl(''),
    cantidad: new FormControl('')
  });

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

  onEditArticulo(data: Articulo) {
    this.modalService.open(this.myModalInfo);
    const { id } = data;
    this.prodcSrv.getById(id)
      .pipe(
        tap(articulo => this.articulo = articulo),

      ).subscribe();

  }

  onSave(formulario: Articulo) {
    const datos = this.formulario.value;
    console.log('Desde modelo', this.articulo);
    console.log('Desde formulario', datos);

    if (this.formulario.valid) {
      // Hacer un mapping de los cambios. (LEER SOBRE "AUTOMAPPERS")
      const nuevosDatos = { ...this.articulo, ...datos }

      console.log('Estos es el nuevo objeto', nuevosDatos);
    }

  }

  onNew(): void {
    this.route.navigate(['/articulo']);
  }

  onDeleteArticulo(data: Articulo): void {
    const { id } = data;
    let mensaje = "Esta seguro ?";

    if (confirm(mensaje)) {
      this.prodcSrv.delete(id).subscribe(articuloEliminado => {

        if (articuloEliminado.status == 200) {
          alert(`Respuesta : => ${articuloEliminado.message}`);
        } else {
          alert(`Respuesta : => ${articuloEliminado.message}`);
        }

        this.prodcSrv.getAll().subscribe(data =>
          this.articulos = data
        );
      }
      );
    }
  }

  onImageError(event: any) {
    event.target.src = '/assets/images/sin-foto.jpg'
  }

}
