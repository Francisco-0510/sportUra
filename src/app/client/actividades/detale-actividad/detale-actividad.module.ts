import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaleActividadPageRoutingModule } from './detale-actividad-routing.module';

import { DetaleActividadPage } from './detale-actividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaleActividadPageRoutingModule
  ],
  declarations: [DetaleActividadPage]
})
export class DetaleActividadPageModule {}
