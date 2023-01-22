import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';

import {environment} from 'src/environments/environment';
import {PopularTagType} from 'src/app/shared/types/popularTag';
import {GetPopularResponseInterface} from '../types/get-popular-tags-response.interface';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get(url).pipe(
      map((response: GetPopularResponseInterface) => {
        return response.tags;
      })
    );
  }
}
