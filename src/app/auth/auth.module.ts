import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';

import {RegisterComponent} from 'src/app/auth/components/register/register.component';
import {AuthRoutingModule} from 'src/app/auth/auth-routing.module';
import {reducers} from 'src/app/auth/store/reducers';
import {AuthService} from 'src/app/auth/services/auth.service';
import {RegisterEffect} from 'src/app/auth/store/effects/register.effect';
import {BackendErrorMessagesModule} from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module';
import {PersistenceService} from 'src/app/shared/services/persistence.service';
import {LoginEffect} from 'src/app/auth/store/effects/login.effect';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
