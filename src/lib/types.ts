export type RecipeFile = {
  metadata: {
    title: string;
    date: string;
    time: string;
    serving: string;
    course: Array<string>;
    image: string;
  };
  default: {
    render: () => void;
  };
};
