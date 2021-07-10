import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloComponent } from './articulo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticuloComponent
  ],
  imports: [
    CommonModule,
    ArticuloRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArticuloModule { }
