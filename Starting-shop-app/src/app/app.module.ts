import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ShopItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
