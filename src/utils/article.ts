export type Note = {
  key: string;
  section: number;
  title: string;
  displayTitle: string;
  path: string;
  source: string;
  status: "in progress" | "active" | "archived";
};
export type Segment = {
  name: string;
  displayName: string;
  notes: Note[];
};
export type Category = {
  name: "mathematics" | "logic" | "physics" | "philosophy";
  segments: Segment[];
};
export type ArticleIndex = {
  categories: Category[];
};

export const getAllSegment = (jsonIndex: any) => {
  const index = jsonIndex as ArticleIndex;
  return index.categories
    .map(category => category.segments).flat(1)
    .map(segment => segment.name);
};

export const getDisplayName = (jsonIndex: any, segmentName: string) => {
  const index = jsonIndex as ArticleIndex;
  const segment = index.categories
    .map(category => category.segments).flat(1)
    .find(segment => segment.name === segmentName);
  
  return segment !== undefined ? segment.displayName : undefined;
};

export const getNotes = (jsonIndex: any, segmentName: string) => {
  const index = jsonIndex as ArticleIndex;
  const segment = index.categories
    .map(category => category.segments).flat(1)
    .find(segment => segment.name === segmentName);

    return segment !== undefined ? segment.notes : [] as Note[];
};
