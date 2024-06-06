import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
import type { RecipeFile } from '$lib/types';

export function capitalize(str: string) {
  if (!str) return str;

  return str.at(0)?.toUpperCase() + str.slice(1);
}

export async function fetchRecipes(course?: string) {
  const allRecipeFiles = import.meta.glob('$recipes/*.md');

  const recipes = await Promise.all(
    Object.entries(allRecipeFiles).map(async ([path, resolver]) => {
      const { metadata } = (await resolver()) as RecipeFile;
      const recipePath = path.slice(13, -3);

      return { meta: metadata, path: recipePath };
    })
  );

  if (course) {
    return recipes.filter((recipe) => recipe.meta.course.includes(course));
  }

  return recipes;
}

export async function fetchCourses() {
  const allRecipeFiles = import.meta.glob('$recipes/*.md');
  const courses = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(allRecipeFiles).map(async ([_, resolver]) => {
      const { metadata } = (await resolver()) as RecipeFile;

      return metadata.course;
    })
  );

  const coursesSet = new Set(courses.flat());

  return Array.from(coursesSet);
}

interface GetImgUrlOptions {
  format?: 'auto' | 'webp' | 'png' | 'avif';
  quality?: number | 'auto';
  width?: number;
}
export function getImgUrl(imgName: string, options?: GetImgUrlOptions) {
  const params = { format: 'auto', quality: 75, width: 512, ...options };
  const url = `${PUBLIC_CLOUDINARY_URL}/f_${params.format},q_${params.quality},w_${params.width}/v1/recipe/${imgName}`;

  return url;
}
