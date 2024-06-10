<script lang="ts">
  import { IconAlarm, IconBookmarksFilled } from '@tabler/icons-svelte';
  import type { PageData } from '../../routes/$types';

  import Chip from './Chip.svelte';
  import { getImgUrl } from '$lib/utils';
  import { favourites } from '$lib/stores';

  export let recipes: PageData['recipes'];
</script>

{#if recipes.length === 0}
  <div id="no-recipes-container">
    <p>Oh no, there is nothing here yet.</p>
    <p>Time to find meals you'd enjoy!</p>
  </div>
{:else}
  <div id="cards-container">
    {#each recipes as recipe}
      {@const imgUrl = recipe.meta.image ?? 'default'}
      <section>
        {#if $favourites.includes(recipe.meta.title)}<span class="favourite-label"
            ><IconBookmarksFilled /></span
          >{/if}
        <img alt={`${recipe.meta.title}`} src={getImgUrl(imgUrl, { width: 512 })} />
        <a
          aria-label={`To ${recipe.meta.title} recipe page`}
          href={`/recipes/${encodeURIComponent(recipe.path)}`}
        >
          {recipe.meta.title}
        </a>
        <div class="tags-container">
          {#each recipe.meta.course as course}
            <a aria-label={`To '${course}' dishes page`} href={`/courses/${course}`}>
              <Chip text={course} />
            </a>
          {/each}
        </div>
        <footer class="card-footer">
          <p><IconAlarm /> {recipe.meta.time}</p>
          <p class="text-sm">
            Published: {new Date(recipe.meta.date).toLocaleDateString()}
          </p>
        </footer>
      </section>
    {/each}
  </div>
{/if}

<style>
  #no-recipes-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    & p {
      font-size: 1.5rem;
    }
  }

  #cards-container {
    display: grid;
    gap: 1.5rem;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, min(19rem, 80dvw));
    justify-content: center;
    margin-block: 1.5rem;
    width: 100%;
  }

  section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.25rem;
    border: 2px solid var(--primary);
    padding: 1rem;
    width: 100%;
  }

  section a {
    display: block;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 0;
    }
  }

  section img {
    aspect-ratio: 1 / 1;
    margin-bottom: 0.5rem;
  }

  .favourite-label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: var(--bg-color);
    background-color: color-mix(in srgb, var(--bg-color) 90%, transparent 10%);
    border-radius: 0.25em;
    height: 2.5rem;
    width: 2.5rem;
  }

  .tags-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    & > a {
      position: relative;
      z-index: 1;
    }

    & > a:hover > span {
      background-color: var(--primary-hover-bg);
    }
  }

  footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-block-start: 1rem;

    & > p {
      margin: 0;
    }
  }
</style>
