import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/start.component';
import { ProductDetailPage } from './products/product-detail.component';
import { WelcomePage } from './welcome/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponent,
    ProductDetailPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'products',
      component: ProductListComponent
    },
    {
      path: 'products/:id',
      canActivate: [ProductDetailGuard],
      component: ProductDetailPage
    },
    {
      path: '',
      component: WelcomePage,
      pathMatch: 'full'
    },
    {
      path: '**',
      component: WelcomePage,
      pathMatch: 'full'
    }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
