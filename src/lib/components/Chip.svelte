<script lang="ts">
  export let text: string;
</script>

<span>{text}</span>

<style>
  span {
    border: 1px solid var(--color-text);
    border-radius: 8px;
    color: var(--color-text);
    cursor: default;
    display: inline-block;
    font-size: 0.75rem;
    font-family: Lato, Segoe, sans-serif;
    font-weight: 400;
    line-height: 1rem;
    margin-block: 0.25rem;
    padding: 0.25rem 0.5rem;
    width: fit-content;
  }
</style>
