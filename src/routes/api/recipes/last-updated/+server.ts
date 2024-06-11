import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { GITHUB_API_TOKEN } from '$env/static/private';

export const GET: RequestHandler = async ({ url, isSubRequest }) => {
  if (!isSubRequest) {
    return new Response(null, { status: 403, statusText: 'Forbidden' });
  }

  const recipeTitle = url.searchParams.get('title');
  if (!recipeTitle) {
    return new Response(null, { status: 400, statusText: 'Bad Request' });
  }

  const res = await fetch(
    `https://api.github.com/repos/Linkerin/bachelor-recipe/commits?path=src%2Frecipes%2F${recipeTitle}.md&page=1&per_page=1`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_API_TOKEN}`
      }
    }
  );

  if (!res.ok) {
    return new Response(null, { status: 404, statusText: 'Not Found' });
  }
  const gitHubData = await res.json();
  const commitDate: string = gitHubData[0]?.commit?.committer?.date;

  if (!commitDate) {
    return new Response(null, { status: 404, statusText: 'Not Found' });
  }

  return json({ lastUpdated: commitDate });
};
