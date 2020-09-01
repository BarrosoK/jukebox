import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from '@app/modules/music/search/search.component';
import {PlaylistComponent} from '@app/modules/music/playlist/playlist.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
