<script lang="ts">
  import { fade } from 'svelte/transition';
  import {
    IconAlarm,
    IconBookmarksFilled,
    IconBookmarkOff,
    IconBookmarkPlus,
    IconChefHat,
    IconToolsKitchen2 as IconMeal,
    IconUsers as IconPersons
  } from '@tabler/icons-svelte';
  import type { PageData } from './$types';

  import { favourites, action } from '$lib/stores';
  import { getImgUrl } from '$lib/utils/index.js';

  export let data: PageData;

  const courses = data.course?.join(', ');
  $: favourite = $favourites?.includes(data.title);
</script>

<article in:fade={{ duration: 400 }}>
  <h1>
    {data.title}{#if favourite} <IconBookmarksFilled />{/if}
  </h1>
  <p class="text-sm">Published: {new Date(data.date).toLocaleDateString()}</p>
  <section>
    {#if data.image}
      <div class="img-container">
        <img
          alt={`${data.title}`}
          srcset={`${getImgUrl(data.image, { width: 400 })}, ${getImgUrl(data.image, {
            width: 640
          })} 2x, ${getImgUrl(data.image, { width: 1024 })} 3x`}
          src={getImgUrl(data.image)}
        />
      </div>
    {/if}
    <div>
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
      <button
        class={`favourites-btn${favourite ? ' remove' : ''}`}
        on:click|preventDefault={() => {
          if ($favourites?.includes(data.title)) {
            action('remove', data.title);
          } else {
            action('add', data.title);
          }
        }}
      >
        {#if favourite}
          <IconBookmarkOff /> Remove from
        {:else}
          <IconBookmarkPlus /> Add to
        {/if}
        favourites</button
      >
    </div>
  </section>
  <svelte:component this={data.content} />
  <b>Enjoy! <IconChefHat class="chef-icon" /></b>
</article>

<style>
  h1 {
    margin-bottom: 0rem;

    & > svg {
      height: 1em;
      width: auto;
      vertical-align: -11.5%;
      margin-inline-start: 0.125em;
    }
  }

  section {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .img-container {
    height: fit-content;
    width: fit-content;
    border: 2px solid var(--primary);
    padding: 0.5rem;

    & > img {
      aspect-ratio: 1 / 1;
      width: min(14rem, 70vw);
    }
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

  .favourites-btn {
    background-color: var(--primary-light);
    border: 1px solid transparent;
    border-radius: 0.25rem;
    color: var(--on-primary);
    cursor: pointer;
    font-family: Raleway, sans-serif;
    font-size: 1.125rem;
    margin-block-start: 1rem;
    padding: 0.75rem 1.25rem 0.75rem 0.75rem;

    &:hover {
      background-color: var(--primary);
    }

    &:active {
      background-color: var(--primary-dark);
    }

    & > svg {
      height: 1em;
      width: auto;
      vertical-align: -11.5%;
    }

    &.remove {
      background: none;
      border-color: var(--primary);
      color: var(--primary);

      &:hover,
      &:active {
        background-color: var(--primary-hover-bg);
      }

      &:active {
        color: var(--primary-dark);
        border-color: var(--primary-dark);
      }
    }
  }

  @media (max-width: 360px) {
    .features__item {
      font-size: 0.875rem;
      padding: 0.75rem 1rem;
    }
  }

  b {
    display: block;
    margin-block: 0.75rem 1.5rem;

    & > :global(.chef-icon) {
      height: 1em;
      width: 1em;
      vertical-align: -8%;
    }
  }
</style>
