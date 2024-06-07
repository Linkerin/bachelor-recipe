import { getImgUrl } from '$lib/utils/index.js';
import type { PageLoad } from './$types.js';

export const load: PageLoad = async ({ params }) => {
  const slug = decodeURIComponent(params.slug);
  try {
    const recipe = await import(`$recipes/${slug}.md`);
    const { title, date, time, serving, course, image } = recipe.metadata;
    const content = recipe.default;

    const pageMeta = {
      title,
      description: `'${title}' recipe that you can cook in ${time}. See more at The Bachelor Recipe!`,
      twitter: {
        image: getImgUrl(image, { width: 1024 }),
        imageAlt: `Prepared '${title}' dish`
      }
    };

    return { content, title, date, time, serving, course, image, pageMeta };
  } catch (err) {
    console.log(`Recipe '${slug}' load failed.`, err);
  }
};

export const prerender = 'auto';
