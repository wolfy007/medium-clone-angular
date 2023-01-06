import {Injectable} from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error while saving to localStorage', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Error while fetching from localStorage', error);
      return null;
    }
  }
}
