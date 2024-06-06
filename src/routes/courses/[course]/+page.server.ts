import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { capitalize, fetchRecipes } from '$lib/utils';
import type { PageMeta } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
  const course = decodeURIComponent(params.course);

  const recipes = await fetchRecipes(course);
  if (!recipes) {
    error(404, { message: 'Not Found' });
  }

  const sorted = recipes.sort((a, b) => {
    return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
  });

  const pageMeta: PageMeta = {
    title: capitalize(course),
    description: `Delicious and easy-to-cook ${course} recipes at The Bachelor Recipe.`
  };

  return { recipes: sorted, pageMeta };
};

// export const prerender = 'auto';
