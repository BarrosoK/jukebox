import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {YouTubePlayer} from '@angular/youtube-player';
import {Select, Store} from '@ngxs/store';
import {AuthState} from '@app/core/store/states/auth.state';
import {BehaviorSubject, Observable} from 'rxjs';
import {MusicState, MusicStateModel} from '@app/core/store/states/music.state';
import {Logout} from '@app/core/store/actions/auth.actions';
import {SetPlayerName, SetPlayerPlaying, SetPlayerVideo} from '@app/core/store/actions/music.actions';
import {combineLatest, skip, take} from 'rxjs/operators';
import {ResizeEvent} from 'angular-resizable-element';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @ViewChild('player') player: YouTubePlayer;

  @Select(MusicState.playerPlayingSelect) playing$: Observable<boolean>;
  @Select(MusicState.playerVideoSelect) video$: Observable<string>;
  @Select(MusicState.playerNameSelect) name$: Observable<string>;

  time = 0;
  duration = 0;
  showPlayer = false;

  playerSize = {
    width: 1200,
    height: 420,
  };

  resizing = new BehaviorSubject(false);

  constructor(private store: Store) {
  }

  ngOnInit(): void {

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.store.dispatch(new SetPlayerPlaying(false));
    this.store.dispatch(new SetPlayerVideo(''));
    this.store.dispatch(new SetPlayerName(''));

    this.playing$
      .subscribe(playing => {
        const video = this.store.selectSnapshot<string>((state: any) => state.music.player.video);
        if (this.player === undefined || video === undefined) {
          return;
        }
        this.player.playVideo();
        this.startSlider();
      });
    this.video$
      .subscribe((video: string) => {
        if (video === undefined || this.player === undefined) {
          return;
        }
        this.store.dispatch(new SetPlayerPlaying(true));
        this.player.videoId = video;
        this.player.playVideo();
        this.startSlider();
      });
  }

  goToTime(time) {
    this.time = time;
    this.player.seekTo(time, true);
  }

  showYoutubePlayer() {
    this.showPlayer = !this.showPlayer;
  }

  onResizeStart(): void {
    this.resizing.next(true);
  }

  onResizeEnd(event: ResizeEvent): void {
    if (event !== undefined) {
      this.playerSize.height = event.rectangle.height;
      this.playerSize.width = event.rectangle.width;
    }
    this.resizing.next(false);

  }

  play(): void {
    const playing = this.store.selectSnapshot<string>((state: any) => state.music.player.playing);
    this.store.dispatch(new SetPlayerPlaying(!playing));
  }

  set(): void {
    this.store.dispatch(new SetPlayerVideo('GYAB4Td62zI')).subscribe();
  }

  startSlider() {
    const playing = this.store.selectSnapshot<boolean>((state: any) => state.music.player.playing);
    playing === true ? this.player.playVideo() : this.player.pauseVideo();
    if (playing) {
      setInterval(() => {
        this.time = Math.round(this.player.getCurrentTime());
        this.duration = Math.round(this.player.getDuration());
      }, 1000);
    }
  }


}
