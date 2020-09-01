import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProspectComponent} from '@app/modules/admin/sync/prospect/prospect.component';
import {OrderComponent} from '@app/modules/admin/sync/order/order.component';
import {MailComponent} from '@app/modules/admin/sync/mail/mail.component';


const routes: Routes = [
  {
    path: 'prospect',
    component: ProspectComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'mail',
    component: MailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncRoutingModule { }
