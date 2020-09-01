import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {SyncModule} from '@app/modules/admin/sync/sync.module';


@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        SyncModule,
        FlexModule,
        FormsModule,
    ]
})
export class AdminModule { }
