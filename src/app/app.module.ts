import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
