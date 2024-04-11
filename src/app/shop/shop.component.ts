import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
cartServices = inject(CartService);
shops:any[]=[
 {name:'Gymnocalcium Cactus',imageUrl:"../assets/image/shop-cactus-1.png", price:15 , id:1},
 {name:'Echeveria al Succulent',imageUrl:"../assets/image/shop-cactus-2.png",price:20, id:2},
 {name:'Ferrocacneas Cactus',imageUrl:"../assets/image/shop-cactus-3.png",price:23, id:3},
 {name:'Key Lime Pie Succulent',imageUrl:"../assets/image/shop-cactus-4.png",price:43, id:4},
 {name:'Melocacneas Cactus',imageUrl:"../assets/image/shop-cactus-5.png",price:23, id:5},
 {name:' Lily Pie Pad Succulent',imageUrl:"../assets/image/new-cactus-2.png",price:34, id:6},
 
];

addToCart(shop:any){
  this.cartServices.addToCart(shop);

}
}
