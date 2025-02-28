import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productSelected = new EventEmitter<number>();

  onProductSelect(): void {
    this.productSelected.emit(this.product.id);
  }
}
