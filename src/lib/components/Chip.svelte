<script lang="ts">
  export let text: string;
</script>

<div>{text}</div>

<style>
  div {
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
