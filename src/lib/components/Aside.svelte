<script lang="ts">
  export let menuItems: Array<string>;
</script>

<ul>
  {#each menuItems as item}
    <li>
      <a href={`#`}>
        {item.at(0)?.toUpperCase() + item.slice(1)}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    border: none;
    border-right: 1px solid var(--primary);
    padding: 1rem 3rem 0 0;
    margin: 0 2rem 0 1rem;
  }

  @media (max-width: 600px) {
    ul {
      display: none;
    }
  }
</style>
