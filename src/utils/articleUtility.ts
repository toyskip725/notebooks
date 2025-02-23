import { mainColor, type WithStyle } from "./mainColor";

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
export type CategoryName = "mathematics" | "logic" | "physics" | "philosophy";
export type Category = {
  name: CategoryName;
  segments: Segment[];
};
export type ArticleIndex = {
  categories: Category[];
};

export const color = (categoryName: CategoryName) => {
  switch(categoryName) {
    case "mathematics":
      return mainColor.navy;
    case "logic": 
      return mainColor.crimson;
    case "physics":
      return mainColor.teal;
    case "philosophy":
        return mainColor.orange;
  }
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

export const getParentCategoryName = (jsonIndex: any, segmentName: string) => {
  const index = jsonIndex as ArticleIndex;
  const parent = index.categories
    .filter(category => category.segments.some(segment => segment.name === segmentName));

  if (parent.length === 0 || parent.length >= 2) {
    throw new Error("not found");
  }

  return parent.at(0)?.name;
}

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

export const getDisplayNameWithStyle: WithStyle<typeof getDisplayName> = (jsonIndex: any, segmentName: string) => {
  const parentName = getParentCategoryName(jsonIndex, segmentName);

  if (parentName === undefined) {
    throw new Error("category is undefined");
  }

  return {
    value: getDisplayName(jsonIndex, segmentName),
    color: color(parentName),
  };
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
