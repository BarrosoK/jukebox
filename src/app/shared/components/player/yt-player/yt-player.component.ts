import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yt-player',
  template: `
    <youtube-player
      #player
      [videoId]="'XqZsoesa55w'"
      suggestedQuality="highres"
      hidden
    ></youtube-player>
  `,
  styleUrls: ['./yt-player.component.scss']
})
export class YtPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
