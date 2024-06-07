import type { PageLoad } from './$types.js';

import { getImgUrl } from '$lib/utils/index.js';
import type { PageMeta } from '$lib/types.js';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const load: PageLoad = async ({ params }) => {
  const slug = decodeURIComponent(params.slug);
  try {
    const recipe = await import(`$recipes/${slug}.md`);
    const { title, date, time, serving, course, image } = recipe.metadata;
    const content = recipe.default;

    const pageMeta: PageMeta = {
      title,
      description: `'${title}' recipe that you can cook in ${time}. See more at The Bachelor Recipe!`,
      twitter: {
        image: getImgUrl(image, { width: 1024 }),
        imageAlt: `Prepared '${title}' dish`
      },
      openGraph: {
        type: 'article',
        url: `${PUBLIC_BASE_URL}/recipes/${params.slug}`
      }
    };

    return { content, title, date, time, serving, course, image, pageMeta };
  } catch (err) {
    console.log(`Recipe '${slug}' load failed.`, err);
  }
};

export const prerender = 'auto';
