<script lang="ts">
  import { IconInfoSmall } from '@tabler/icons-svelte';
</script>

<header>
  <a href="/" aria-label="To The Bachelor Recipe homepage">The Bachelor Recipe</a>
  <a href="/about" aria-label="To about page"><IconInfoSmall stroke={1.5} size={28} /></a>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    background-color: var(--bg-color);
    border-bottom: 1px solid var(--primary);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    padding-inline: 1rem;
    width: 100%;
    z-index: 10;

    & > a:last-of-type {
      color: var(--primary);
      border: 1px solid var(--primary);
      border-radius: 0.25rem;

      &:hover {
        background-color: var(--primary-hover-bg);
        color: var(--primary-dark);
        border-color: var(--primary-dark);
      }
    }
  }

  a {
    color: var(--primary);
    font-family: 'Bitter', serif;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.75rem;
    text-wrap: nowrap;
  }

  a:hover {
    color: var(--primary-dark);
    text-decoration: none;
  }

  @media (min-width: 800px) {
    a {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }

    header {
      height: 3.75rem;
    }
  }
</style>
