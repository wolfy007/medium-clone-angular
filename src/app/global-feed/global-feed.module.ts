import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GlobalFeedComponent} from 'src/app/global-feed/components/global-feed/global-feed.component';
import {GlobalFeedRoutingModule} from './global-feed.routing';
import {FeedModule} from 'src/app/shared/modules/feed/feed.module';
import {BannerModule} from 'src/app/shared/modules/banner/banner.module';
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
