import { color, getAllNotes, getParentCategoryName } from "./articleUtility";
import type { ColorCode, MainColor } from "./mainColor";

export type Dependency = {
  sourceKey: string;
  targetKey: string;
  type: "prerequisite" | "relates to";
};
export type ArticleDependenciesConfig = {
  dependencies: Array<Dependency>;
};

export type NodeAttribute = {
  label: string;
  x: number;
  y: number;
  size: number;
  color: MainColor; 
};
export type Node = {
  key: string;
  attributes: NodeAttribute;
};

export type EdgeAttribute = {
  size: number;
  type: "arrow",
  color: ColorCode;
};
export type Edge = {
  source: string;
  target: string;
  attributes: EdgeAttribute;
};

export type SimpleGraph = {
  nodes: Array<Node>;
  edges: Array<Edge>;
};
export type GraphArea = {
  x: {
    min: number;
    max: number;
  };
  y: {
    min: number;
    max: number;
  };
};
export type GraphBuilderConfig = {
  node: {
    size: number;
    range: GraphArea;
  }
  edge: {
    size: number;
    color: ColorCode;
  }
};

export const loadDependencies = (jsonConfig: any) => {
  const config = jsonConfig as ArticleDependenciesConfig;
  return config.dependencies;
};

const initialize = (axis: "x" | "y", range: GraphArea) => {
  const rand = Math.random();
  return axis === "x" 
    ? rand * (range.x.max - range.x.min) + range.x.min
    : rand * (range.y.max - range.y.min) + range.y.min;
};

export const graphBuilder = (config: GraphBuilderConfig) => {
  return (jsonIndex: any, dependencies: Dependency[]): SimpleGraph => {
    const notes = getAllNotes(jsonIndex);

    const nodes = notes.map((note) => {
      const segment = note.key.slice(0, note.key.indexOf('/'));
      const category = getParentCategoryName(jsonIndex, segment);

      if (category === undefined) {
        throw new Error("category not found");
      }

      return {
        key: note.key,
        attributes: {
          label: note.displayTitle,
          x: initialize("x", config.node.range),
          y: initialize("y", config.node.range),
          size: config.node.size,
          color: color(category),
        }
      };
    });

    const edges = dependencies.map((dependency) => {
      return {
        source: dependency.sourceKey,
        target: dependency.targetKey,
        attributes: {
          size: config.edge.size,
          type: "arrow",
          color: config.edge.color,
        } as EdgeAttribute,
      };
    });

    return {
      nodes,
      edges,
    };
  };
};
