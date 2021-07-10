import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  formulario = new FormGroup({
    id: new FormControl(''),
    cod_Articulo: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    medida: new FormControl(''),
    cantidad: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log("Form => ", this.formulario['value']);
  }

}
