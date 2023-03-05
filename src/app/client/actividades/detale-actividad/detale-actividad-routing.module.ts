import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaleActividadPage } from './detale-actividad.page';

const routes: Routes = [
  {
    path: '',
    component: DetaleActividadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaleActividadPageRoutingModule {}
