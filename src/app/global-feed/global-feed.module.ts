import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GlobalFeedComponent} from 'src/app/global-feed/components/global-feed/global-feed.component';
import {GlobalFeedRoutingModule} from './global-feed.routing';
import {FeedModule} from '../shared/modules/feed/feed.module';

@NgModule({
  imports: [CommonModule, GlobalFeedRoutingModule, FeedModule],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
