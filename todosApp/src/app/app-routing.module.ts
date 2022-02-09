import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShopComponent } from './components/shops/create-shop/create-shop.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ShopsComponent } from './components/shops/shops.component';
import { TodosComponent } from './components/todos/todos.component';
import { UpdateShopComponent } from './components/shops/update-shop/update-shop.component';
import { ShopItemsComponent } from './components/shop-items/shop-items.component';
import { CreateShopItemComponent } from './components/shop-items/create-shop-item/create-shop-item.component';
import { UpdateShopItemComponent } from './components/shop-items/update-shop-item/update-shop-item.component';

const routes: Routes = [
  {path: 'shops',component: ShopsComponent},
  {path: 'create-shop',component: CreateShopComponent},
  {path: 'update-shop/:id',component: UpdateShopComponent},
  {path: 'shop-items',component: ShopItemsComponent},
  {path: 'create-shop-item',component: CreateShopItemComponent},
  {path: 'update-shop-item/:id',component: UpdateShopItemComponent},
  {path: 'todos',component: TodosComponent},
  {path: 'pokemon',component: PokemonComponent},
  {path: '', redirectTo:"/pokemon", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
