import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAcademicDataPage } from './form-academic-data.page';

const routes: Routes = [
  {
    path: '',
    component: FormAcademicDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAcademicDataPageRoutingModule {}
