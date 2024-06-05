import type { PageLoad } from './$types.js';

export const load: PageLoad = async ({ params }) => {
  const slug = decodeURIComponent(params.slug);
  try {
    const recipe = await import(`$recipes/${slug}.md`);
    const { title, date, time, serving, course, image } = recipe.metadata;
    const content = recipe.default;

    return { content, title, date, time, serving, course, image };
  } catch (err) {
    console.log(`Recipe '${slug}' load failed.`, err);
  }
};

export const prerender = 'auto';
