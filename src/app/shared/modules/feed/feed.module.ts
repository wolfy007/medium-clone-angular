import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';

import {FeedComponent} from 'src/app/shared/modules/feed/components/feed/feed.component';
import {FeedService} from 'src/app/global-feed/services/feed.service';
import {GetFeedEffect} from 'src/app/shared/modules/feed/store/effects/getFeed.effects';
import {reducers} from 'src/app/shared/modules/feed/store/reducers';
import {ErrorMessageModule} from '../error-message/error-message.module';
import {LoadingModule} from '../loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([GetFeedEffect]),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
