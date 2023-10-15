<script lang="ts">
  import Aside from '$lib/components/Aside.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '$lib/styles/base.css';
  import '$lib/styles/components.css';

  export let data;
</script>

<svelte:head>
  <title>The Bachelor Recipe</title>
  <meta name="description" content="Simple cooking recipes that will make you a chef" />
  <meta name="robots" content="index,follow" />
</svelte:head>

<Header />
<main>
  <Aside menuItems={data.recipes} />
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
