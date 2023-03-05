import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectActivityPageRoutingModule } from './select-activity-routing.module';

import { SelectActivityPage } from './select-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectActivityPageRoutingModule
  ],
  declarations: [SelectActivityPage]
})
export class SelectActivityPageModule {}
