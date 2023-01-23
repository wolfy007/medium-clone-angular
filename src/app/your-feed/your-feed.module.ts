import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {YourFeedRoutingModule} from './your-feed.routing';
import {FeedModule} from 'src/app/shared/modules/feed/feed.module';
import {BannerModule} from 'src/app/shared/modules/banner/banner.module';
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module';
import {FeedTogglerModule} from '../shared/modules/feed-toggler/feed-toggler.module';
import {YourFeedComponent} from './components/your-feed/your-feed.component';

@NgModule({
  imports: [
    CommonModule,
    YourFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
