import { fetchCourses } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const courses = await fetchCourses();
  const sorted = courses.sort();

  return { courses: sorted };
};
