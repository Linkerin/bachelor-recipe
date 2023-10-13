<script lang="ts">
  export let data;
</script>

<ul>
  {#each data.recipes as recipe}
    <li>
      <a href={recipe.path}>
        {recipe.meta.title}
      </a>
      Published {recipe.meta.date}
    </li>
  {/each}
</ul>

<style>
  ul {
    gap: 1.5rem;
    width: min(1000px, 80dvw);
  }

  li {
    font-size: 0.9rem;
  }

  li > a {
    display: block;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-block: 0.25rem;
  }
</style>
