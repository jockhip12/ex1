import { NgModule } from '@angular/core';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'list', component: ProductsListComponent},
  {path: '**', component: NotFoundComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }
