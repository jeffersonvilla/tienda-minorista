import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductoServiceService } from './producto-service.service';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    AgregarProductoComponent,
    ActualizarProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
