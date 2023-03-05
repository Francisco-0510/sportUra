import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAcademicDataPageRoutingModule } from './form-academic-data-routing.module';

import { FormAcademicDataPage } from './form-academic-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAcademicDataPageRoutingModule
  ],
  declarations: [FormAcademicDataPage]
})
export class FormAcademicDataPageModule {}
