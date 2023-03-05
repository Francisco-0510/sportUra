import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPersonDataPage } from './form-person-data.page';

const routes: Routes = [
  {
    path: '',
    component: FormPersonDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPersonDataPageRoutingModule {}
