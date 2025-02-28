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
      imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699.99,
      description: 'Latest model smartphone with high-resolution display, powerful processor, and advanced camera system. Features all-day battery life and fast charging capabilities.',
      imageUrl: 'https://th.bing.com/th/id/OIP.1bKh51i4Lt06Pq2jkZLbxAHaLJ?w=137&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 3,
      name: 'Laptop',
      price: 1299.99,
      description: 'Ultrabook laptop with high-performance specs, lightweight design, and long battery life. Perfect for professionals and students alike.',
      imageUrl: 'https://th.bing.com/th/id/OIP.mM11Kuw5oiliRI29xWioHAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 249.99,
      description: 'Feature-packed smartwatch with health monitoring, notifications, and fitness tracking. Water-resistant design with customizable watch faces.',
      imageUrl: 'https://th.bing.com/th/id/OIP.Jv5WbYtvtHcKbA40Uac82QHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 5,
      name: 'Wireless Headphones',
      price: 149.99,
      description: 'Premium wireless headphones with noise cancellation technology, providing an immersive audio experience with crystal clear sound quality. Comfortable design for extended listening sessions.',
      imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg'
    },
    {
      id: 6,
      name: 'Smartphone',
      price: 699.99,
      description: 'Latest model smartphone with high-resolution display, powerful processor, and advanced camera system. Features all-day battery life and fast charging capabilities.',
      imageUrl: 'https://th.bing.com/th/id/OIP.1bKh51i4Lt06Pq2jkZLbxAHaLJ?w=137&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 7,
      name: 'Laptop',
      price: 1299.99,
      description: 'Ultrabook laptop with high-performance specs, lightweight design, and long battery life. Perfect for professionals and students alike.',
      imageUrl: 'https://th.bing.com/th/id/OIP.mM11Kuw5oiliRI29xWioHAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 8,
      name: 'Smartwatch',
      price: 249.99,
      description: 'Feature-packed smartwatch with health monitoring, notifications, and fitness tracking. Water-resistant design with customizable watch faces.',
      imageUrl: 'https://th.bing.com/th/id/OIP.Jv5WbYtvtHcKbA40Uac82QHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 9,
      name: 'Wireless Headphones',
      price: 149.99,
      description: 'Premium wireless headphones with noise cancellation technology, providing an immersive audio experience with crystal clear sound quality. Comfortable design for extended listening sessions.',
      imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg'
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
