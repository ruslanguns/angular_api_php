import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '@app/service/productos.service';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  formulario = new FormGroup({
    marca: new FormControl(''),
    modelo: new FormControl(''),
    medida: new FormControl(''),
    codProveedor: new FormControl(''),
    cantidad: new FormControl('')
  });

  constructor(
    private prodcSrv: ProductosService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSave() {
    console.log("Form => ", this.formulario.value);
    const data = this.formulario.value;
    this.prodcSrv.save(data).subscribe((res) => {
      alert(res);
    });
    this.route.navigate(['/productos']);
  }

}
