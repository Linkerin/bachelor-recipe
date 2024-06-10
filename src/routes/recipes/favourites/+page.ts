import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { fetchRecipes } from '$lib/utils';
import { LOCAL_STORAGE_KEYS } from '$lib/constants';

export const load: PageLoad = async () => {
  if (!browser) return { recipes: [] };

  const titles: string[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.favourites) ?? '[]');

  const recipes = await fetchRecipes({ titles });
  if (!recipes) {
    error(404, { message: 'Not Found' });
  }

  const sorted = recipes.sort((a, b) => {
    return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
  });

  return { recipes: sorted };
};

export const ssr = false;
