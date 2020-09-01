import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import {MusicRoutingModule} from '@app/modules/music/music-routing.module';
import {SharedModule} from '@app/shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MDBBootstrapModule} from 'angular-bootstrap-md';



@NgModule({
  declarations: [SearchComponent, PlaylistComponent],
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class MusicModule { }
