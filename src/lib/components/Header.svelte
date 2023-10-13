<header>
  <a href="/" aria-label="Home page">The Bachelor Recipe</a>
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
    margin-bottom: 1rem;
    padding-inline: 1rem;
    width: 100%;
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
