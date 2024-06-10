import { writable } from 'svelte/store';
import { browser } from '$app/environment';

import { LOCAL_STORAGE_KEYS } from './constants';

const key = LOCAL_STORAGE_KEYS.favourites;

const favouritesArr: string[] = browser ? JSON.parse(localStorage.getItem(key) ?? '[]') : [];
export const favourites = writable(favouritesArr);

export function action(type: 'add' | 'remove', name: string) {
  switch (type) {
    case 'add':
      favourites.update((value) => {
        value.push(name);

        return value;
      });
      break;

    case 'remove':
      favourites.update((value) => {
        return value.filter((entry) => entry !== name);
      });
      break;

    default:
      break;
  }

  favourites.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
}
