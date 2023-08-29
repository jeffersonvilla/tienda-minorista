import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoServiceService } from '../producto-service.service';
import { Producto } from '../Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit, OnDestroy{

  public productos: Producto[];

  private rutaSuscripcion: Subscription;
  
  constructor(private router: Router, private ruta: ActivatedRoute, 
    private productoService: ProductoServiceService) {}

  ngOnInit(): void {
    this.rutaSuscripcion = this.ruta.params.subscribe(params => {
      this.getProductos();
    });
  }

  ngOnDestroy(): void {
    this.rutaSuscripcion.unsubscribe();
  }

  public getProductos(): void {
    this.productoService.get().subscribe({
      next: ((productos: Producto[]) => {this.productos = productos}), 
      error: ((error: any) => {console.error(error)})}
    );
  }

  public eliminarProducto(idProducto: number){
    this.productoService.delete(idProducto).subscribe({
      next: (v) =>{console.log(v)},
      error: (e) => {console.log(e)},
      complete: () => this.getProductos()
    })
  }
}
