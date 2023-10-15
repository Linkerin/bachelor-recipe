export async function load({ params }) {
  try {
    const recipe = await import(`../../../recipes/${params.slug}.md`);
    const { title, date, time, serving, course, image } = recipe.metadata;
    const content = recipe.default;

    return { content, title, date, time, serving, course, image };
  } catch (err) {
    console.log(`Recipe '${params.slug}' load failed.`, err);
  }
}

export const prerender = 'auto';
