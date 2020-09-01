import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Logout, SaveToken} from '../actions/auth.actions';
import {JwtHelperService} from '@auth0/angular-jwt';
import {
  SetPlayer, SetPlayerName,
  SetPlayerPlaying,
  SetPlayerTime,
  SetPlayerVideo,
  SetPlayerVolume,
  SetSearch, SetSearchDisplayThumb
} from '@app/core/store/actions/music.actions';

export interface MusicStateModel {
  search: {
    name: string,
    items: any[],
    displayThumb: boolean
  };
  queue: any[];
  player: {
    video: string;
    time: number;
    volume: number;
    playing: boolean;
    name: string;
  };
}

@State<MusicStateModel>({
  name: 'music',
  defaults: {
    search: {
      name: '',
      items: [],
      displayThumb: true
    },
    queue: [],
    player: {
      video: '',
      time: undefined,
      volume: undefined,
      playing: false,
      name: ''
    }
  }
})
@Injectable()
export class MusicState {

  @Selector()
  static playerSelect(state: MusicStateModel) {
    return state.player;
  }

  @Selector()
  static playerVideoSelect(state: MusicStateModel) {
    return state.player.video;
  }

  @Selector()
  static queueSelect(state: MusicStateModel) {
    return state.queue;
  }

  @Selector()
  static playerPlayingSelect(state: MusicStateModel) {
    return state.player.playing;
  }

  @Selector()
  static searchSelect(state: MusicStateModel) {
    return state.search;
  }

  @Selector()
  static searchNameSelect(state: MusicStateModel) {
    return state.search.name;
  }

  @Selector()
  static searchItemsSelect(state: MusicStateModel) {
    return state.search.items;
  }

  @Selector()
  static searchDisplayThumbSelect(state: MusicStateModel) {
    return state.search.displayThumb;
  }

  @Selector()
  static playerNameSelect(state: MusicStateModel) {
    return state.player.name;
  }

  @Action(SetSearch)
  setSearchName(ctx: StateContext<MusicStateModel>, action: SetSearch) {
    ctx.setState((state) => ({
      ...state,
      search: {
        name: action.name,
        items: action.items,
        displayThumb: state.search.displayThumb
      },
    }));
  }

  @Action(SetPlayer)
  setPlayer(ctx: StateContext<MusicStateModel>, action: SetPlayer) {
    ctx.setState((state) => ({
      ...state,
      player: action.player
    }));
  }

  @Action(SetPlayerVolume)
  setPlayerVolume(ctx: StateContext<MusicStateModel>, action: SetPlayerVolume) {
    ctx.setState((state) => ({
      ...state,
      player: {
        ...state.player,
        volume: action.volume
      }
    }));
  }

  @Action(SetSearchDisplayThumb)
  setSearchDisplayThumb(ctx: StateContext<MusicStateModel>, action: SetSearchDisplayThumb) {
    ctx.setState((state) => ({
      ...state,
      search: {
        ...state.search,
        displayThumb: action.display
      }
    }));
  }

  @Action(SetPlayerName)
  setPlayerName(ctx: StateContext<MusicStateModel>, action: SetPlayerName) {
    ctx.setState((state) => ({
      ...state,
      player: {
        ...state.player,
        name: action.name
      }
    }));
  }

  @Action(SetPlayerTime)
  setPlayerTime(ctx: StateContext<MusicStateModel>, action: SetPlayerTime) {
    ctx.setState((state) => ({
      ...state,
      player: {
        ...state.player,
        time: action.time
      }
    }));
  }

  @Action(SetPlayerVideo)
  setPlayerVideo(ctx: StateContext<MusicStateModel>, action: SetPlayerVideo) {
    ctx.setState((state) => ({
      ...state,
      player: {
        ...state.player,
        video: action.video
      }
    }));
  }

  @Action(SetPlayerPlaying)
  setPlayerPlaying(ctx: StateContext<MusicStateModel>, action: SetPlayerPlaying) {
    ctx.setState((state) => ({
      ...state,
      player: {
        ...state.player,
        playing: action.playing
      }
    }));
  }

}
