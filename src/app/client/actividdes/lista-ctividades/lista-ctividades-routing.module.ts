import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCtividadesPage } from './lista-ctividades.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCtividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCtividadesPageRoutingModule {}
