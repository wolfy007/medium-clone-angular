import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {TopBarModule} from 'src/app/shared/modules/topBar/topBar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([]),
    TopBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
