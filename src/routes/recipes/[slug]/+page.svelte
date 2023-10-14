<script lang="ts">
  export let data;
  import {
    IconAlarm,
    IconChefHat,
    IconToolsKitchen2 as IconMeal,
    IconUsers as IconPersons
  } from '@tabler/icons-svelte';
</script>

<article>
  <h1>{data.title}</h1>
  <p class="text-sm">Published: {new Date(data.date).toLocaleDateString()}</p>
  <div class="features">
    <div class="features__item">
      <IconAlarm size={30} />
      {data.time}
    </div>
    <div class="features__item">
      <IconPersons size={30} />
      {data.serving}
    </div>
    <div class="features__item">
      <IconMeal size={30} />
      {data.course}
    </div>
  </div>
  <svelte:component this={data.content} />
  <p>Enjoy! <IconChefHat class="chef-icon" /></p>
</article>

<style>
  h1 {
    margin-bottom: 0rem;
  }

  .features {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid var(--color-text);
    border-radius: 1rem;
    width: fit-content;
  }

  .features__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;

    padding: 0.75rem 1.25rem;
    text-align: center;
  }

  .features__item:not(:last-of-type) {
    border-right: 1px dashed var(--color-text);
  }

  p :global(.chef-icon) {
    height: 1em;
    width: 1em;
    vertical-align: -8%;
  }
</style>
