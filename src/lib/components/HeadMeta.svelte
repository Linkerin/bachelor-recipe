<script lang="ts">
  import type { PageMeta } from '$lib/types';

  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;
  export let keywords: PageMeta['keywords'] = undefined;
  export let twitter: PageMeta['twitter'] = undefined;

  const defaults: PageMeta = {
    title: 'The Bachelor Recipe',
    description: 'Simple cooking recipes that will make you a chef',
    keywords: [
      'cooking',
      'recipe',
      'bachelor',
      'cookbook',
      'dish',
      'dinner',
      'lunch',
      'breakfast',
      'meal'
    ],
    twitter: {
      card: 'summary',
      image: '/apple-touch-icon.png',
      imageAlt: "The Bachelor Recipe icon - chef's hat"
    }
  };
</script>

<svelte:head>
  <title>{`${title ? title + ' | ' : ''}${defaults.title}`}</title>
  <meta name="application-name" content="The Bachelor Recipe" />
  <meta name="description" content={description ?? defaults.description} />
  <meta
    name="keywords"
    content={keywords && keywords?.length > 0 ? keywords.join(',') : defaults.keywords?.join(',')}
  />
  <meta name="color-scheme" content="light" />
  <meta name="robots" content="index,follow" />
  <meta name="author" content="Alexei" />
  <link rel="author" href="https://github.com/Linkerin" />

  <meta name="twitter:card" content={twitter?.card ?? defaults.twitter?.card} />
  <meta name="twitter:title" content={twitter?.title ?? title ?? defaults.title} />
  <meta
    name="twitter:description"
    content={twitter?.description ?? description ?? defaults.description}
  />
  <meta name="twitter:image" content={twitter?.image ?? defaults.twitter?.image} />
  <meta name="twitter:image:alt" content={twitter?.imageAlt ?? defaults.twitter?.imageAlt} />
</svelte:head>
