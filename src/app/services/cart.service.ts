import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private items: any[] = [];

  constructor() {}

  addToCart(shop: any) {
    alert('item added to cart');
    this.items.push({...shop, quantity:1 });
  }

  getItems() {
    return this.items;
  }

delete (item: any){
  alert('item removed form cart');
this.items = this.items.filter((i) => i.id !== item.id );
}

incrementQuantity(id: number) {
  let item = this.items.find((i) => i.id === id);
if(item){
item.quantity++;
}
}


decrementQuantity(id:number){
  let item = this.items.find((i)=>i.id === id);
if(item){
item.quantity--;
}
}

getTotal() {
  return this.items.reduce((acc, item)=>{
    return acc + item.price * item.quantity;
  }, 0);
} 
}


