import type { PageServerLoad } from './$types';

import { capitalize, fetchRecipes } from '$lib/utils';
import type { PageMeta } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
  const course = decodeURIComponent(params.course);

  try {
    const recipes = await fetchRecipes(course);

    const sorted = recipes.sort((a, b) => {
      return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
    });

    const pageMeta: PageMeta = {
      title: capitalize(course),
      description: `Delicious and easy-to-cook ${course} recipes at The Bachelor Recipe.`
    };

    return { recipes: sorted, pageMeta };
  } catch (error) {
    console.error(error);
  }
};
