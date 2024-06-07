<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public';

  import type { PageMeta } from '$lib/types';

  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;
  export let keywords: PageMeta['keywords'] = undefined;
  export let twitter: PageMeta['twitter'] = undefined;
  export let openGraph: PageMeta['openGraph'] = undefined;

  const defaults: PageMeta = {
    title: 'The Bachelor Recipe',
    description:
      'Discover simple and easy cooking recipes designed for bachelors. From quick meals to gourmet dishes, our no-fuss recipes will make you a home chef in no time. Enjoy tasty, hassle-free cooking every day!',
    keywords: [
      'cooking',
      'recipe',
      'bachelor',
      'cookbook',
      'dish',
      'dinner',
      'lunch',
      'breakfast',
      'meal',
      'simple'
    ],
    twitter: {
      card: 'summary',
      image: PUBLIC_BASE_URL + '/apple-touch-icon.png',
      imageAlt: "The Bachelor Recipe icon - chef's hat"
    },
    openGraph: {
      type: 'website',
      url: PUBLIC_BASE_URL,
      siteName: 'The Bachelor Recipe',
      image: {
        url: PUBLIC_BASE_URL + '/images/og_image.png',
        alt: "Pixelart chef image and the inscription: 'The Bachelor Recipe - Tasty Meals, No Fuss'",
        type: 'image/png',
        height: 630,
        width: 1200
      }
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
  <meta name="robots" content="index,follow" />
  <meta name="author" content="Alexei" />
  <link rel="author" href="https://github.com/Linkerin" />

  <meta property="og:title" content={openGraph?.title ?? title ?? defaults.title} />
  <meta
    property="og:description"
    content={openGraph?.description ?? description ?? defaults.description}
  />
  <meta property="og:type" content={openGraph?.type ?? defaults.openGraph?.type} />
  <meta property="og:url" content={openGraph?.url ?? defaults.openGraph?.url} />
  <meta property="og:site_name" content={openGraph?.siteName ?? defaults.openGraph?.siteName} />
  <meta property="og:image:url" content={openGraph?.image?.url ?? defaults.openGraph?.image?.url} />
  <meta property="og:image:alt" content={openGraph?.image?.alt ?? defaults.openGraph?.image?.alt} />
  <meta
    property="og:image:type"
    content={openGraph?.image?.type ?? defaults.openGraph?.image?.type}
  />
  <meta
    property="og:image:height"
    content={openGraph?.image?.height?.toString() ?? defaults.openGraph?.image?.height?.toString()}
  />
  <meta
    property="og:image:width"
    content={openGraph?.image?.width?.toString() ?? defaults.openGraph?.image?.width?.toString()}
  />

  <meta name="twitter:card" content={twitter?.card ?? defaults.twitter?.card} />
  <meta name="twitter:title" content={twitter?.title ?? title ?? defaults.title} />
  <meta
    name="twitter:description"
    content={twitter?.description ?? description ?? defaults.description}
  />
  <meta name="twitter:image" content={twitter?.image ?? defaults.twitter?.image} />
  <meta name="twitter:image:alt" content={twitter?.imageAlt ?? defaults.twitter?.imageAlt} />
</svelte:head>
