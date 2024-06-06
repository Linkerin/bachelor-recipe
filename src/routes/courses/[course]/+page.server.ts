import type { PageServerLoad } from './$types';

import { fetchRecipes } from '$lib/utils';

export const load: PageServerLoad = async ({ params }) => {
  const course = decodeURIComponent(params.course);

  try {
    const recipes = await fetchRecipes(course);

    const sorted = recipes.sort((a, b) => {
      return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
    });

    return { recipes: sorted };
  } catch (error) {
    console.error(error);
  }
};
