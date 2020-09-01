import {Component, OnInit} from '@angular/core';
import {MusicService} from '@app/core/services/music.service';
import {SaveToken} from '@app/core/store/actions/auth.actions';
import {Select, Store} from '@ngxs/store';
import {SetPlayerName, SetPlayerVideo, SetSearch, SetSearchDisplayThumb} from '@app/core/store/actions/music.actions';
import {AuthState} from '@app/core/store/states/auth.state';
import {Observable} from 'rxjs';
import {MusicState, MusicStateModel} from '@app/core/store/states/music.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Select(MusicState.searchSelect) search$: Observable<any>;
  @Select(MusicState.searchDisplayThumbSelect) display$: Observable<boolean>;

  name = '';
  displayThumb = true;

  constructor(private musicService: MusicService, private store: Store) {
  }


  ngOnInit(): void {
    const name = this.store.selectSnapshot<string>((state: any) => state.music.search.name);
    const display = this.store.selectSnapshot<boolean>((state: any) => state.music.search.displayThumb);

    this.store.dispatch(new SetSearchDisplayThumb(display));
    this.name = name;
    this.search$.subscribe(search => {
      console.log('new value', search);
    });
  }

  search(): void {
    this.musicService.search(this.name).subscribe(res => {
      this.store.dispatch(new SetSearch(res.name, res.items));
    });
  }

  displayThumbChange(display) {
    this.store.dispatch(new SetSearchDisplayThumb(display.checked));
  }

  start(name: string, videoId: string) {
    this.store.dispatch(new SetPlayerVideo(videoId));
    this.store.dispatch(new SetPlayerName(name));
  }

  addToQueue(videoId) {
  }

}
