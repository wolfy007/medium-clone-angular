import {PopularTagType} from 'src/app/shared/types/popularTag';

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null;
  isLoading: boolean;
  error: string | null;
}
