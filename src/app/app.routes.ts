import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'shop', component:ShopComponent},
    {path:'contact', component:ContactComponent},
    {path:'cart', component:CartComponent},
    {path:'user-registration', component:UserRegistrationComponent}

];
