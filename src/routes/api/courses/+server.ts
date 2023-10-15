import { json } from '@sveltejs/kit';

import { fetchCourses } from '$lib/utils';

export const GET = async () => {
  try {
    const courses = await fetchCourses();

    return json(courses.sort());
  } catch (err) {
    console.log('Error while fetching courses', err);
    return new Response(`${err}`, { status: 500 });
  }
};
