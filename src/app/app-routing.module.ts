import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-productos', pathMatch: 'full' },
  { path: 'lista-productos', component: ListaProductosComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'actualizar-producto/:idProducto', component: ActualizarProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }