<script lang="ts">
  export let data;
</script>

<ul>
  {#each data.recipes as recipe}
    <li class="text-sm">
      <a href={recipe.path}>
        {recipe.meta.title}
      </a>
      Published: {new Date(recipe.meta.date).toLocaleDateString()}
      <div class="course-tag">{recipe.meta.course}</div>
    </li>
  {/each}
</ul>

<style>
  ul {
    gap: 1.5rem;
    width: min(1000px, 80dvw);
  }

  li > a {
    display: block;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .course-tag {
    border: 1px solid var(--color-text);
    border-radius: 8px;
    cursor: default;
    line-height: 1rem;
    margin-block: 0.25rem;
    padding: 0.25rem 0.5rem;
    width: fit-content;
  }
</style>
