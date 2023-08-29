import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../producto-service.service';
import { Producto } from '../Producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {  
  
  constructor(private ruta: ActivatedRoute, private router: Router,
    private productoservice: ProductoServiceService) { }  
  
  idProducto : number;

  producto = new Producto();

  showAlert = false;

  ngOnInit() {  
    this.idProducto = this.ruta.snapshot.params['idProducto'];
    this.productoservice.getProducto(this.idProducto)
      .subscribe({
        next: (producto: Producto) => {
          this.producto = producto;
        },
        error: (e) => console.error(e),
        complete: () => {}
    });
  }  

  actualizar(){
    this.productoservice.put(this.producto.idProducto ,this.producto)  
      .subscribe({
        next: (v) => {
          console.log(v)
          this.showAlert = true;
          this.producto = new Producto();
        },
        error: (e) => console.error(e),
        complete: () => this.router.navigate([''])  
    });  
  }

  closeAlert() {
    this.showAlert = false;
  }
}
