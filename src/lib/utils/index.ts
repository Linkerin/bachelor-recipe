type RecipeFile = {
	metadata: {
		title: string;
		date: string;
	};
	default: {
		render: () => void;
	};
};

export async function fetchRecipes() {
	const allRecipeFiles = import.meta.glob('/src/recipes/*.md');

	const recipes = await Promise.all(
		Object.entries(allRecipeFiles).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as RecipeFile;
			const recipePath = path.slice(4, -3);

			return { meta: metadata, path: recipePath };
		})
	);

	return recipes;
}
