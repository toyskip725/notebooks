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
  return index.categories.map(category => category.segments).flat(1);
};

export const getAllSegmentName = (jsonIndex: any) => {
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
  
  if (segment === undefined) {
    throw new Error("not found");
  }

  return segment.displayName;
};

export const getNotes = (jsonIndex: any, segmentName: string) => {
  const index = jsonIndex as ArticleIndex;
  const segment = index.categories
    .map(category => category.segments).flat(1)
    .find(segment => segment.name === segmentName);

  return segment !== undefined ? segment.notes : [] as Note[];
};

export const getSource = (jsonIndex: any, key: string) => {
  const index = jsonIndex as ArticleIndex;
  const note = index.categories
    .map(category => category.segments).flat(1)
    .map(segment => segment.notes).flat(1)
    .find(note => note.key === key);

  if (note === undefined) {
    throw new Error("not found");
  }

  return note.source;
};
