import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/shared/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Product[]>(`/products`);
  }

  getOne(id: number) {
    return this.http.get<Product>(`/products/${id}`);
  }

  edit(payload: Product) {
    return this.http.put<Product>(`/products/${payload.id}`, payload);
  }

  add(payload: Product) {
    return this.http.post<Product>(`/products`, payload);
  }

  delete(id: number) {
    return this.http.delete<Product>(`/products/${id}`);
  }
}
