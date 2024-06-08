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

<HeadMeta
  title={$page?.data?.pageMeta?.title}
  description={$page?.data?.pageMeta?.description}
  twitter={$page?.data?.pageMeta?.twitter}
  openGraph={$page?.data?.pageMeta?.openGraph}
/>

<div class="container">
  <Header />
  <Aside courseRecords={data.courses} total={data.total} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  @layer base, component;

  .container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'header header'
      'aside main'
      'footer footer';
    max-height: 100dvh;
    max-width: 100dvw;
    min-height: 100dvh;
    overflow-y: scroll;
    position: relative;
  }

  main {
    grid-area: main;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: space-between;
    padding-inline: 1.5rem;
    width: 100%;
  }

  @media (max-width: 540px) {
    .container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        'header'
        'main'
        'footer';
    }
  }
</style>
