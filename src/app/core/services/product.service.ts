import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 149.99,
      description: 'Premium wireless headphones with noise cancellation technology, providing an immersive audio experience with crystal clear sound quality. Comfortable design for extended listening sessions.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Headphones'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699.99,
      description: 'Latest model smartphone with high-resolution display, powerful processor, and advanced camera system. Features all-day battery life and fast charging capabilities.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Smartphone'
    },
    {
      id: 3,
      name: 'Laptop',
      price: 1299.99,
      description: 'Ultrabook laptop with high-performance specs, lightweight design, and long battery life. Perfect for professionals and students alike.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Laptop'
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 249.99,
      description: 'Feature-packed smartwatch with health monitoring, notifications, and fitness tracking. Water-resistant design with customizable watch faces.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Smartwatch'
    }
  ];


  constructor() { }

  getProducts(): Observable<Product[]> {
    // Using delay() to simulate network latency
    return of(this.products).pipe(delay(500));
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product).pipe(delay(300));
  }
}
