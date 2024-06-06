<script lang="ts">
  import CardsContainer from '$lib/components/CardsContainer.svelte';
  import type { PageData } from './$types.js';

  export let data: PageData;
</script>

<CardsContainer recipes={data.recipes} />
