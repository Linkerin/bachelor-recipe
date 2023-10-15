<script lang="ts">
  export let data;
</script>

<div id="recipe-cards">
  {#each data.recipes as recipe}
    <section>
      <img src={`/images/${recipe.meta.image ?? 'default.webp'}`} alt={`${recipe.meta.title}`} />
      <a href={recipe.path}>
        {recipe.meta.title}
      </a>
      <div class="tags-container">
        {#each recipe.meta.course as course}
          <div class="course-tag">{course}</div>
        {/each}
      </div>
      <p class="text-sm">
        Published: {new Date(recipe.meta.date).toLocaleDateString()}
      </p>
    </section>
  {/each}
</div>

<style>
  #recipe-cards {
    display: flex;
    gap: 1.5rem;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 80vw;
    margin-inline: auto;
  }
  section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    border: 2px solid var(--primary);
    padding: 1rem;
    width: min(19rem, 80vw);
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
    }
  }

  section img {
    aspect-ratio: 1 / 1;
    margin-bottom: 0.5rem;
  }

  .tags-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .course-tag {
    border: 1px solid var(--color-text);
    border-radius: 8px;
    cursor: default;
    font-size: 0.75rem;
    line-height: 1rem;
    margin-block: 0.25rem;
    padding: 0.25rem 0.5rem;
    width: fit-content;
  }
</style>
