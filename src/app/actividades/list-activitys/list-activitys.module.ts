import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListActivitysPageRoutingModule } from './list-activitys-routing.module';

import { ListActivitysPage } from './list-activitys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListActivitysPageRoutingModule
  ],
  declarations: [ListActivitysPage]
})
export class ListActivitysPageModule {}
