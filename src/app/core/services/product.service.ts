import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product';

//Products information have been taken from Amazon.com

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
      imageUrl: 'https://m.media-amazon.com/images/I/514YogjIWpL._AC_SL1500_.jpg'
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
      name: ' Ronaldo Jersey No. 7 Collection Metal Gift Box',
      price: 24.99,
      description: 'Set of 4 Ronaldo Stuff, Ronaldo Necklace, Signature Black Wristband, Hand Weave Bracelet, White Sports Wristband, C-ristiano Ronaldo Merch, Ronaldo Jersey No. 7 Collection Metal Gift Box.',
      imageUrl: 'https://m.media-amazon.com/images/I/71ODTz-RMmL._AC_SY625_.jpg'
    },
    {
      id: 5,
      name: "Dunkin's Coffee",
      price: 17.09,
      description: 'Dunkin Original Blend Medium Roast Ground Coffee, 30 Ounce.',
      imageUrl: 'https://m.media-amazon.com/images/I/51md6FLlL9L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      id: 6,
      name: 'Wireless Keyboard',
      price: 29.99,
      description: 'KNOWSQT Wireless Keyboard - MilkTea Colorful 2.4G Typewriter Full-Size Cute Keyboards - USB Receiver Plug and Play, for Computer, PC, Laptop, Desktop, Windows.',
      imageUrl: 'https://m.media-amazon.com/images/I/61whrA5i6YL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      id: 7,
      name: 'Pullover Hoodie',
      price: 1299.99,
      description: 'Soccer Pullover Hoodie Flag Sweatshirt Fashion Casual Print Gifts for Soccer Fans Men S-2XL.',
      imageUrl: 'https://m.media-amazon.com/images/I/61Clz2DoeQL._AC_SX679_.jpg'
    },
    {
      id: 8,
      name: 'Apple Airpods Pro 2',
      price: 199.00,
      description: "PIONEERING HEARING — AirPods Pro 2 unlock the worlds first all-in-one hearing health experience: a scientifically validated Hearing Test, clinical-grade and active Hearing Protection",
      imageUrl: 'https://m.media-amazon.com/images/I/611pEx7220L._AC_SL1500_.jpg'
    },
    {
      id: 9,
      name: "Men's Tuxedo",
      price: 56.43,
      description: "Men's Suits Slim Fit 2 Piece One Button Blazer Jacket Wedding Prom Tuxedo Pants Set.",
      imageUrl: 'https://m.media-amazon.com/images/I/61wkHJYN86L._AC_SX679_.jpg'
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
