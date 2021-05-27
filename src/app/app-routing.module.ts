import { ContainerComponent } from './shared/container/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { config } from 'rxjs';

const routes: Routes = [
  { 
    path: '', 
    component: ContainerComponent, 
    children:[
      {
        path: '',
        redirectTo : 'home',
        pathMatch : 'full'
      },
      { 
        path: 'home', 
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
      }, 
      { 
        path: 'productos', 
        loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosModule) 
      },
      { 
        path: 'articulo', 
        loadChildren: () => import('./pages/articulo/articulo.module').then(m => m.ArticuloModule) 
      }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
