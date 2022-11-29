import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IProducto } from './producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProducto[]> {
    return this.http
      .get<any>(environment.backEnpoint + '/productos')
      .pipe(map((data) => data.results));
  }

  getById(id: number): Observable<IProducto> {
    return this.http
      .get<any>(environment.backEnpoint + '/productos/' + id)
      .pipe(map((data) => data.results));
  }

  store(producto: IProducto): Observable<IProducto> {
    return this.http
      .post<any>(environment.backEnpoint + '/productos', producto)
      .pipe(map((data) => data));
  }

  delete(id: number): Observable<IProducto> {
    return this.http
      .delete<any>(environment.backEnpoint + '/productos/' + id)
      .pipe(map((data) => data.results));
  }
}
