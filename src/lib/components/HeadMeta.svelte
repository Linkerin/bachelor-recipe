<script lang="ts">
  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;

  const defaults = {
    title: 'The Bachelor Recipe',
    description: 'Simple cooking recipes that will make you a chef'
  };
</script>

<svelte:head>
  <title>{`${title ? title + ' | ' : ''}${defaults.title}`}</title>
  <meta name="description" content={description ?? defaults.description} />
  <meta name="robots" content="index,follow" />
</svelte:head>
