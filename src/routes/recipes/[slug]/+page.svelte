<script lang="ts">
  export let data;
  import { IconAlarm } from '@tabler/icons-svelte';
</script>

<article>
  <h1>{data.title}</h1>
  <p class="text-sm">Published: {data.date}</p>
  <div class="time">
    <IconAlarm size={36} />
    {data.time}
  </div>
  <svelte:component this={data.content} />
</article>

<style>
  h1 {
    margin-bottom: 0rem;
  }

  .time {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.625rem;
    margin-top: 0.75rem;
  }
</style>
