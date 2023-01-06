import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';

import {RegisterComponent} from './components/register/register.component';
import {AuthRoutingModule} from './auth-routing.module';
import {reducers} from 'src/app/auth/store/reducers';
import {AuthService} from 'src/app/auth/services/auth.service';
import {RegisterEffect} from 'src/app/auth/store/effects/register.effect';
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import {PersistenceService} from '../shared/services/persistence.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
