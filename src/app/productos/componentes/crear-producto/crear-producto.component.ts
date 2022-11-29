import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  @Output() loadEmit = new EventEmitter<void>();

  formProducto!: FormGroup;

  isLoading!: boolean;

  constructor(
    private productoService: ProductoService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formProducto = this.fb.group({
      nombre: [null],
      cantidadDisponible: [null],
      valorUnitario: [null],
      createdAt: [null],
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.productoService.store(this.formProducto.value).subscribe(
      (data) => {
        this.loadEmit.emit();
        this.isLoading = false;
        this.formProducto.reset();
        alert('Producto agregado con exito.');
      },
      (err) => {
        this.isLoading = false;
        alert('Ha ocurrido un error inesperado.');
      }
    );
  }
}
