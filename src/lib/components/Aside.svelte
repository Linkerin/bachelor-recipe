<script lang="ts">
  export let menuItems: Array<string>;
</script>

<aside>
  <nav>
    <ul>
      {#each menuItems as item}
        <li>
          <a aria-label={`To '${item}' dishes page`} href={`/courses/${item}`}>
            {item.at(0)?.toUpperCase() + item.slice(1)}
          </a>
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
    align-items: center;
    font-size: 1.125rem;
    line-height: 1.75rem;
    min-height: 3rem;

    & > a {
      padding-inline-start: 0.5rem;
    }
  }

  li:not(:last-of-type) {
    border-block-end: 1px dotted var(--primary);
  }

  @media (max-width: 600px) {
    ul {
      display: none;
    }
  }
</style>
