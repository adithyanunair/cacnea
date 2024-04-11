import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { ShopComponent } from '../shop/shop.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CartComponent,ShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  

}
