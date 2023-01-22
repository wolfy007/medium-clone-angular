import {createAction, props} from '@ngrx/store';

import {ActionTypes} from 'src/app/shared/modules/popular-tags/store/actionTypes';
import {PopularTagType} from 'src/app/shared/types/popularTag';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{popularTags: PopularTagType[]}>()
);

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
