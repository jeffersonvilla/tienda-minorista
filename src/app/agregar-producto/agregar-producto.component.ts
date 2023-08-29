import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../producto-service.service';
import { Producto } from '../Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {  
  
  constructor(private router: Router, private productoservice: ProductoServiceService) { }  
  
  producto = new Producto();  

  showAlert = false;

  ngOnInit() {  
 
  }  
  
  guardar() {  
    this.productoservice.post(this.producto)  
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