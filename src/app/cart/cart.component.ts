import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

import { CommonModule } from '@angular/common';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ShopComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 cartServices = inject(CartService);  

 deleteFromCart(item: any){
this.cartServices.delete(item);
 }


}
