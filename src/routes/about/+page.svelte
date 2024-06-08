<script lang="ts">
  import { IconChefHat, IconExternalLink } from '@tabler/icons-svelte';
</script>

<article>
  <h1>Welcome to The Bachelor Recipe!</h1>
  <p>
    We aim to make cooking easy, enjoyable, and accessible, no matter your culinary skills. Our
    recipes are simple, delicious, easy-to-follow — we love them, and we know you will too!
  </p>
  <p>
    Our recipes cover everything from quick breakfasts to hearty dinners, ensuring you can prepare
    tasty meals without spending hours in the kitchen or breaking the bank.
  </p>

  <h2>Submit Your Recipes</h2>
  <p>
    Do you have a favorite recipe that you'd like to share with our community? We welcome
    contributions from our users! Write your recipe using our
    <a
      aria-label="Download Markdown file that contains a recipe example structure for The Bachelor Recipe"
      href="/files/recipe-example.md"
      download>example markdown file</a
    >. Email your recipe to
    <a aria-label="New recipes e-mail address" href="mailto:new-recipe@snipshot.dev"
      >new-recipe@snipshot.dev</a
    >.
  </p>
  <p>
    We look forward to seeing your creations and featuring them on our site. Happy cooking!
    <IconChefHat />
  </p>

  <h2>Contact information</h2>
  <p>
    If you have any questions, feedback, or suggestions, feel free to reach out.
    <br />
    We would love to hear from you. Our e-mail:
    <a aria-label="Feedback e-mail address" href="mailto:recipe-feedback@snipshot.dev"
      >recipe-feedback@snipshot.dev</a
    >
  </p>

  <h2>website development</h2>
  <p>
    I am <a
      aria-label="External link to Alexei Gusev's GitHub profile"
      href="https://github.com/Linkerin"
      rel="noopener external"
      target="_blank"
      data-sveltekit-preload-data="false">Alexei Gusev <IconExternalLink /></a
    >
    and this website started as a fun project to get acquainted with
    <a
      aria-label="External link to Svelte framework website"
      href="https://svelte.dev/"
      rel="noopener external"
      target="_blank"
      data-sveltekit-preload-data="false">Svelte <IconExternalLink /></a
    >. Time passed and it has grown into something much more meaningful. I like the idea that it can
    be used by other solo chefs, and it's also a great place for me to store my own recipes, which I
    occasionally forget.
  </p>
  <p>
    Now, <b>The Bachelor Recipe</b> has become one of my favorite creations, and I’m thrilled to share
    it with you.
  </p>
  <p>
    You can find all the source code in the <a
      aria-label="External link to The Bachelor Recipe GitHub repository"
      href="https://github.com/Linkerin/bachelor-recipe"
      rel="noopener external"
      target="_blank"
      data-sveltekit-preload-data="false">GitHub repository <IconExternalLink /></a
    >.
  </p>
</article>

<style>
  article {
    margin-block-end: 1rem;

    & > p svg {
      vertical-align: -11.5%;
      height: 1em;
      min-width: 1em;
      width: auto;
    }

    & > p > a {
      align-items: center;
    }

    & > p > a > svg {
      margin-inline-start: 0.25em;
    }
  }
</style>
