<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '$lib/styles/base.css';
  import '$lib/styles/components.css';
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  @layer base, component;

  main {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    padding-inline: 1.5rem;
    width: 100%;
    /* height: 100%; */
  }
</style>
