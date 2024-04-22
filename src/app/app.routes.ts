import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'shop', component:ShopComponent},
    {path:'contact', component:ContactComponent},
    {path:'cart', component:CartComponent},
    {path:'news', component:NewsComponent},
    {path:'user-registration', component:UserRegistrationComponent}

];
