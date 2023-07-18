import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TapWaterFilterComponent } from './tap-water-filter/tap-water-filter.component';
import { WaterRecyclingMachineComponent } from './water-recycling-machine/water-recycling-machine.component';
import { FaqComponent } from './faq/faq.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'blogs', component:BlogsComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'footer', component:HeaderComponent},
  { path: 'login', component:LoginComponent},
  { path: 'water-tap-filter', component:TapWaterFilterComponent},
  { path: 'water-recycling-machine', component:WaterRecyclingMachineComponent},
  { path: 'faq', component:FaqComponent},
  { path: 'checkout', component:CheckoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
