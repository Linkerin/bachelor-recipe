export type RecipeFile = {
  metadata: {
    title: string;
    date: string;
    time: string;
    serving: string;
    course: Array<string>;
    image?: string;
  };
  default: {
    render: () => void;
  };
};

export type PageMeta = {
  title?: string;
  description?: string;
  keywords?: string[];
  twitter?: {
    card: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  };
};
