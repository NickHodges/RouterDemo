import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { Z_FULL_FLUSH } from 'zlib';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: 'blah', component: ProductEditComponent },
      {
        path: ':id',
        component: ProductIdComponent
      },
      { path: ':id/edit', component: ProductEditComponent }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
