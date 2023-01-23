import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeedTogglerComponent} from 'src/app/shared/modules/feed-toggler/components/feed-toggler/feed-toggler.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedTogglerComponent],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
