export type ArticleOrderConfig = {
  segments: string[];
};

export const loadOrder = (jsonConfig: any) => {
  const config = jsonConfig as ArticleOrderConfig;
  return config.segments;
};

