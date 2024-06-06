<script lang="ts">
  import { IconHeartFilled } from '@tabler/icons-svelte';

  const year = new Date().getFullYear();
</script>

<footer>
  <p>The Bachelor Recipe &copy; {year}</p>
  <p />
  <p class="attribution">
    Made with <IconHeartFilled /> by
    <a
      href="https://github.com/Linkerin"
      aria-label="To Linkerin Github profile"
      rel="noopener external"
      target="_blank">Linkerin</a
    >
  </p>
</footer>

<style>
  footer {
    background-color: var(--primary);
    color: var(--on-primary);
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    min-height: 4.25rem;
    height: fit-content;
    padding: 1rem;
    width: 100%;
  }

  p {
    font-size: 0.9rem;
    letter-spacing: 0.04rem;
    margin: 0;
  }

  p:nth-of-type(2) {
    border-right: 1px solid var(--on-primary);
    height: 1rem;
  }

  .attribution {
    display: flex;
    align-items: center;
    gap: 0.5ch;
  }

  a {
    color: inherit;
    font-weight: 700;
  }
</style>
