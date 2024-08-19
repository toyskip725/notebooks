import { mainColor } from "./mainColor";

const notes: {
  "mathematics": Record<string, string>;
  "logic": Record<string, string>
} = {
  "mathematics": {
    "algebra": "Algebra",
  },
  "logic": {
    "lambda-calculus": "Lambda Calculus",
    "type-theory": "Type Theory", 
  }
} as const;
type NoteCategory = keyof typeof notes;

export const findNoteCategoryInfo = (category: NoteCategory) => {
  switch (category) {
    case "mathematics": 
      return {
        color: mainColor.navy,
      };
    case "logic":
      return {
        color: mainColor.crimson,
      };
    default:
      throw new Error();
  }
}

export const findNoteSegmentInfo = (path: string) => {
  if (path in notes.mathematics) {
    return {
      title: notes.mathematics[path],
      color: mainColor.navy,
    };
  }

  if (path in notes.logic) {
    return {
      title: notes.logic[path],
      color: mainColor.crimson,
    }
  }

  return null;
};