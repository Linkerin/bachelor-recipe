export const load = async ({ fetch }) => {
  const response = await fetch(`/api/recipes`);
  const recipes = await response.json();

  return {
    recipes
  };
};
