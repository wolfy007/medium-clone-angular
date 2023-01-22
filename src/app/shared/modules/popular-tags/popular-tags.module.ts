import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RouterModule} from '@angular/router';

import {reducers} from './store/reducers';
import {PopularTagsComponent} from 'src/app/shared/modules/popular-tags/components/popular-tags/popular-tags.component';
import {GetPopularTagsEffect} from './store/effects/get-popular-tags.effects';
import {LoadingModule} from '../loading/loading.module';
import {ErrorMessageModule} from '../error-message/error-message.module';
import {PopularTagsService} from './services/popular-tags.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
