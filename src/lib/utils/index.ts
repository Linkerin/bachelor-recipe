type RecipeFile = {
  metadata: {
    title: string;
    date: string;
    time: string;
    serving: string;
    course: Array<string>;
    image: string;
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

export async function fetchCourses() {
  const allRecipeFiles = import.meta.glob('/src/recipes/*.md');
  const courses = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(allRecipeFiles).map(async ([_, resolver]) => {
      const { metadata } = (await resolver()) as RecipeFile;

      return metadata.course;
    })
  );

  const coursesSet = new Set(courses.flat());

  return [...coursesSet];
}
