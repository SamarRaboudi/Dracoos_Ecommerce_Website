import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'blogs', component:BlogsComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'footer', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
