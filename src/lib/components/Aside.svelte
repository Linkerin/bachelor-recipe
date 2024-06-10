<script lang="ts">
  import { IconList, IconX } from '@tabler/icons-svelte';
  import type { MouseEventHandler } from 'svelte/elements';
  import { page } from '$app/stores';
  import { pushState } from '$app/navigation';

  import { favourites } from '$lib/stores';

  export let courseRecords: [string, number][];
  export let total: number;

  let asideNav: HTMLElement;
  $: isOpenedNav = $page.state.showNav;

  const showAsideHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if ($page.state.showNav) {
      pushState('', { showNav: false });
    } else {
      pushState('', { showNav: true });
    }
  };
</script>

<aside bind:this={asideNav} class={isOpenedNav ? 'show' : undefined}>
  <nav>
    <ul>
      <li class="all-recipes">
        <a aria-label="To home page" href="/">All Recipes</a>
        <span>{total}</span>
      </li>
      {#each courseRecords as record}
        <li class={$page.url.pathname.includes(record[0]) ? 'current' : undefined}>
          <a aria-label={`To '${record[0]}' dishes page`} href={`/courses/${record[0]}`}>
            {record[0].at(0)?.toUpperCase() + record[0].slice(1)}
          </a>
          <span>{record.at(1)}</span>
        </li>
      {/each}
      <li class={$page.url.pathname.includes('recipes/favourites') ? 'current' : undefined}>
        <a aria-label="To favourite recipes page" href="/recipes/favourites">Favourites</a>
        <span>{$favourites.length}</span>
      </li>
    </ul>
  </nav>
</aside>
<button
  aria-label="{isOpenedNav ? 'Close' : 'Open'} navigation menu"
  class="show-nav-btn"
  on:click|preventDefault={showAsideHandler}
>
  {#if isOpenedNav}
    <IconX size={36} />
  {:else}
    <IconList size={36} />
  {/if}
</button>

<style>
  aside {
    grid-area: aside;
    position: sticky;
    top: var(--header-height);
    box-shadow: -0.75rem 0rem 1.5rem -1.5rem hsl(225, 58%, 45%, 0.6) inset;
    max-height: calc(100dvh - var(--header-height));
    padding: 1rem 1.5rem;
  }

  ul {
    border: none;
    gap: 0;
    margin: 0;
    min-width: 14dvw;
    padding: 0;
    width: 100%;
  }

  li {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.75rem 0.5rem;
    position: relative;

    & > span {
      color: var(--neutral);
      cursor: default;
      font-size: 0.875rem;
    }

    & > a::before {
      content: '';
      position: absolute;
      inset: 0;
    }
  }

  li:not(:nth-last-of-type(2)) {
    border-block-end: 1px dotted var(--primary);
  }

  li:last-of-type {
    border: none;
    margin-block-start: 1.75rem;
  }

  .all-recipes > a {
    font-weight: bold;
  }

  .all-recipes > a,
  .current > a {
    color: var(--primary-dark);
  }

  .current {
    background-color: var(--primary-hover-bg, hsl(225, 58%, 45%, 0.09));
  }

  .show-nav-btn {
    display: none;
  }

  @media (max-width: 540px) {
    aside {
      position: fixed;
      top: var(--header-height);
      left: -100dvw;
      z-index: 8;
      background-color: var(--bg-color);
      height: calc(100dvh - var(--header-height));
      width: 100dvw;
      transition: 0.4s left ease;
      box-shadow: -1.25rem 0rem 2.5rem -2.5rem hsl(225, 58%, 45%, 0.6) inset;
    }

    .show-nav-btn {
      position: fixed;
      top: 80vh;
      right: 0rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      aspect-ratio: 1.5 / 1;
      background-color: var(--primary-light);
      border: none;
      border-radius: 0.25rem 0 0 0.25rem;
      box-shadow: 0 0 3px 1px rgb(0, 0, 0, 0.25);
      color: var(--on-primary);
      cursor: pointer;
      height: 3.25rem;
      padding-inline-start: 0.5rem;
      width: auto;
      z-index: 9;
    }

    .show {
      left: 0;
    }

    .block-scroll {
      overflow-y: hidden;
    }
  }
</style>
