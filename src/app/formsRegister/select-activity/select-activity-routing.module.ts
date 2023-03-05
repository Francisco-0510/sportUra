import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectActivityPage } from './select-activity.page';

const routes: Routes = [
  {
    path: '',
    component: SelectActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectActivityPageRoutingModule {}
