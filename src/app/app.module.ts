import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './modules/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AdminModule} from './modules/admin/admin.module';
import {NgxsModule} from '@ngxs/store';
import {AuthState} from './core/store/states/auth.state';
import {AuthModule} from './modules/auth/auth.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {ToastrModule} from 'ngx-toastr';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import {JwtInterceptor} from '@app/core/interceptors/jwt.interceptor';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {environment} from '../environments/environment';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MusicModule} from '@app/modules/music/music.module';
import {MusicState} from '@app/core/store/states/music.state';
import {YouTubePlayerModule} from '@angular/youtube-player';

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    AuthModule,
    MusicModule,
    SocketIoModule.forRoot(config),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTooltipModule,
    ToastrModule.forRoot(),
    NgxsModule.forRoot([AuthState, MusicState],
      { developmentMode: false }),
    NgxsStoragePluginModule.forRoot({
      key: ['auth', 'music']
    }),
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
