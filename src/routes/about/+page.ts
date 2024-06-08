import type { PageLoad } from './$types';

import type { PageMeta } from '$lib/types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const load: PageLoad = () => {
  const pageMeta: PageMeta = {
    title: 'About',
    description:
      'Learn more about The Bachelor Recipe, a place to find simple and delicious recipes for solo chefs.',
    openGraph: { url: PUBLIC_BASE_URL + '/about' }
  };

  return { pageMeta };
};
