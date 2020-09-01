export class SetSearch {
  static readonly type = '[Search] Set Search';
  constructor(public name: string, public items: any[]) {
  }
}

export class SetPlayer {
  static readonly type = '[Player] Set Player';
  constructor(public player: any) {
  }
}

export class SetPlayerVolume {
  static readonly type = '[Player] Set Volume';
  constructor(public volume: number) {
  }
}

export class SetSearchDisplayThumb {
  static readonly type = '[Search] Set Thumb';
  constructor(public display: boolean) {
  }
}

export class SetPlayerVideo {
  static readonly type = '[Player] Set Video';
  constructor(public video: string) {
  }
}

export class SetPlayerTime {
  static readonly type = '[Player] Set Time';
  constructor(public time: number) {
  }
}

export class SetPlayerPlaying {
  static readonly type = '[Player] Set Playing';
  constructor(public playing: boolean) {
  }
}

export class SetPlayerName {
  static readonly type = '[Player] Set Name';
  constructor(public name: string) {
  }
}


