import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MaterialModule} from './material/material.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {IconsModule, MDBBootstrapModule} from 'angular-bootstrap-md';
import {FlexLayoutModule} from '@angular/flex-layout';
import {OWL_DATE_TIME_LOCALE, OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PlayerComponent } from './components/player/player.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { YtPlayerComponent } from './components/player/yt-player/yt-player.component';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
  declarations: [NavigationComponent, PlayerComponent, YtPlayerComponent],
  providers: [{provide: OWL_DATE_TIME_LOCALE, useValue: 'fr'}],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    YouTubePlayerModule,
    IconsModule,
    ResizableModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavigationComponent,
    FormsModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ]
})
export class SharedModule {
}
