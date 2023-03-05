import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPersonDataPageRoutingModule } from './form-person-data-routing.module';

import { FormPersonDataPage } from './form-person-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPersonDataPageRoutingModule
  ],
  declarations: [FormPersonDataPage]
})
export class FormPersonDataPageModule {}
