export type MovieMetadata = {
  id?: string;
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  genre?: string;
  duration?: string;
  videoUrl?: string;
};

export type MovieState = {
  getVideoPath: MovieMetadata;
  url: string;
};
