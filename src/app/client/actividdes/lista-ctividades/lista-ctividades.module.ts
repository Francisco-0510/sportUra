import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCtividadesPageRoutingModule } from './lista-ctividades-routing.module';

import { ListaCtividadesPage } from './lista-ctividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCtividadesPageRoutingModule
  ],
  declarations: [ListaCtividadesPage]
})
export class ListaCtividadesPageModule {}
