<script lang="ts">
  import type { LayoutData } from './$types';

  import { page } from '$app/stores';

  import Aside from '$lib/components/Aside.svelte';
  import Header from '$lib/components/Header.svelte';
  import HeadMeta from '$lib/components/HeadMeta.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '$lib/styles/base.css';
  import '$lib/styles/components.css';

  export let data: LayoutData;
</script>

<HeadMeta title={$page?.data?.pageMeta?.title} description={$page?.data?.pageMeta?.description} />

<Header />
<main>
  <Aside menuItems={data.courses} />
  <slot />
</main>
<Footer />

<style>
  @layer base, component;

  main {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: space-between;
    padding-inline: 1.5rem;
    width: 100%;
  }
</style>
