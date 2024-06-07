<script lang="ts">
  import { page } from '$app/stores';

  export let courseRecords: [string, number][];
  export let total: number;
</script>

<aside>
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
    </ul>
  </nav>
</aside>

<style>
  aside {
    box-shadow: -0.75rem 0rem 1.5rem -1.5rem hsl(225, 58%, 45%, 0.6) inset;
    margin-inline-end: 1rem;
  }

  ul {
    border: none;
    gap: 0;
    margin: 0;
    min-width: 14dvw;
    padding: 1rem 1.5rem 0 0;
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

  li:not(:last-of-type) {
    border-block-end: 1px dotted var(--primary);
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

  @media (max-width: 600px) {
    ul {
      display: none;
    }
  }
</style>
