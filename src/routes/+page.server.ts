import { fetchRecipes } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const recipes = await fetchRecipes();

  const sorted = recipes.sort((a, b) => {
    return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
  });

  return { recipes: sorted };
};

export const prerender = true;
