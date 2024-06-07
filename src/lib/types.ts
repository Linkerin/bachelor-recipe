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
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  };
  openGraph?: {
    title?: string;
    description?: string;
    type?: 'article' | 'book' | 'profile' | 'website';
    url?: string;
    siteName?: string;
    image?: {
      url?: string;
      alt?: string;
      type?:
        | 'image/gif'
        | 'image/jpeg'
        | 'image/png'
        | 'image/svg+xml'
        | 'image/tiff'
        | 'image/webp';
      height?: number;
      width?: number;
    };
  };
};
