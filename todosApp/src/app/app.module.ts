import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { ShopsComponent } from './components/shops/shops.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { CreateShopComponent } from './components/shops/create-shop/create-shop.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { UpdateShopComponent } from './components/shops/update-shop/update-shop.component';
import { UpdateShopItemComponent } from './components/shop-items/update-shop-item/update-shop-item.component';
import { CreateShopItemComponent } from './components/shop-items/create-shop-item/create-shop-item.component';
import { ShopItemsComponent } from './components/shop-items/shop-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ShopsComponent,
    PokemonComponent,
    CreateShopComponent,
    HeaderComponent,
    UpdateShopComponent,
    UpdateShopItemComponent,
    CreateShopItemComponent,
    ShopItemsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
