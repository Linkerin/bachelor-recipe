export const load = async ({ fetch }) => {
  const response = await fetch(`/api/courses`);
  const recipes = await response.json();

  return {
    recipes
  };
};
