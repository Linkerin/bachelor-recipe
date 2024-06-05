import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
import type { RecipeFile } from '$lib/types';

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

  return Array.from(coursesSet);
}

interface GetImgUrlOptions {
  format?: 'auto' | 'webp' | 'png' | 'avif';
  quality?: number | 'auto';
  width?: number;
}
export function getImgUrl(
  imgName: string,
  options: GetImgUrlOptions = { format: 'auto', quality: 75, width: 512 }
) {
  const url = `${PUBLIC_CLOUDINARY_URL}/f_${options.format},q_${options.quality},w_${options.width}/v1/recipe/${imgName}`;

  return url;
}
