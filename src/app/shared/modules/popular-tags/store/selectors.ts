import {createSelector} from '@ngrx/store';
import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {PopularTagsStateInterface} from '../types/popular-tags-state.interface';

export const feedFeatureSelector = (
  state: AppStateInterface
): PopularTagsStateInterface => state.popularTags;

export const popularTagsSelector = createSelector(
  feedFeatureSelector,
  (feedState: PopularTagsStateInterface) => feedState.data
);

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: PopularTagsStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: PopularTagsStateInterface) => feedState.error
);
