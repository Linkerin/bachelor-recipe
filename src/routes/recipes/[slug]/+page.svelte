<script lang="ts">
  import {
    IconAlarm,
    IconChefHat,
    IconToolsKitchen2 as IconMeal,
    IconUsers as IconPersons
  } from '@tabler/icons-svelte';
  import { getImgUrl } from '$lib/utils/index.js';

  export let data;

  const courses = data.course.join(', ');
</script>

<article>
  <h1>{data.title}</h1>
  <p class="text-sm">Published: {new Date(data.date).toLocaleDateString()}</p>
  <section>
    {#if data.image}
      <div class="img-container">
        <img src={getImgUrl(data.image)} alt={`${data.title}`} />
      </div>
    {/if}
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
        {courses}
      </div>
    </div>
  </section>
  <svelte:component this={data.content} />
  <b>Enjoy! <IconChefHat class="chef-icon" /></b>
</article>

<style>
  h1 {
    margin-bottom: 0rem;
  }

  section {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .features {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid var(--color-text);
    border-radius: 0.5rem;
    width: fit-content;
    height: fit-content;
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

  @media (max-width: 360px) {
    .features__item {
      font-size: 0.875rem;
      padding: 0.75rem 1rem;
    }
  }

  .img-container {
    height: fit-content;
    width: fit-content;
    border: 2px solid var(--primary);
    padding: 0.5rem;
  }

  img {
    aspect-ratio: 1 / 1;
    width: min(14rem, 70vw);
  }

  b {
    display: block;
    margin-block: 0.75rem;
  }

  b > :global(.chef-icon) {
    height: 1em;
    width: 1em;
    vertical-align: -8%;
  }
</style>
