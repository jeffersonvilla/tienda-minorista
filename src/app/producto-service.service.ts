import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private apiUrl = 'http://localhost:8080/api/v1/producto';

  constructor(private http: HttpClient) { }

  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}`);
  }

  getProducto(idProducto: number){
    return this.http.get<Producto>(`${this.apiUrl}/${idProducto}`);
  }

  post(producto: Producto): Observable<any> {
    return this.http.post<Producto>(`${this.apiUrl}`, producto);
  }

  put(idProducto: number, producto: Producto){
    return this.http.put<Producto>(`${this.apiUrl}/actualizar/${idProducto}`, producto);
  }

  delete(idProducto: number){
    return this.http.delete(`${this.apiUrl}/eliminar/${idProducto}`);
  }
}
