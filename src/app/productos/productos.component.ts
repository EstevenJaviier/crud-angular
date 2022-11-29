import { Component, OnInit } from '@angular/core';
import { IProducto } from '../servicios/producto.interface';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos!: IProducto[];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productoService.getAll().subscribe(
      (data) => {
        this.productos = data;
      },
      (err) => {
        alert('Ha ocurrido un error inesperado.');
      }
    );
  }

  handleDelete(id: number) {
    this.productoService.delete(id).subscribe(
      (data) => {
        this.getAll();
        alert('Producto eliminado con exito.');
      },
      (err) => {
        alert('Ha ocurrido un error inesperado.');
      }
    );
  }
}
