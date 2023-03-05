import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListActivitysPage } from './list-activitys.page';

const routes: Routes = [
  {
    path: '',
    component: ListActivitysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListActivitysPageRoutingModule {}
