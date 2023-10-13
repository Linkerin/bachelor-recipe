import { json } from '@sveltejs/kit';

import { fetchRecipes } from '$lib/utils';

export const GET = async () => {
	try {
		const recipes = await fetchRecipes();

		const sorted = recipes.sort((a, b) => {
			return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
		});

		return json(sorted);
	} catch (err) {
		console.log('Error while fetching recipes', err);
		return new Response(`${err}`, { status: 500 });
	}
};
