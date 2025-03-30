import fs from "node:fs/promises";
import { graphBuilder, loadDependencies, type SimpleGraph } from "../src/utils/graphUtility";
import Graph from "graphology";
import forceLayout from "graphology-layout-force";

// JSON load
let graphData: SimpleGraph;

if (process.argv[2] == "load") {
  const file = await fs.readFile("src/static/graph.json", { encoding: "utf-8" });
  graphData = JSON.parse(file);
} else {
  const jsonArticles = await fs.readFile("src/articles/articles.json", { encoding: "utf-8" });
  const jsonDependencies = await fs.readFile("src/articles/dependencies.json", { encoding: "utf-8" });
  const dependencies = loadDependencies(JSON.parse(jsonDependencies));

  // init
  const builder = graphBuilder({
    node: {
      size: 10,
      range: {
        x: { min: -1, max: 1 },
        y: { min: -1, max: 1 },
      },
    },
    edge: {
      size: 3,
      color: "#b8b8bd",
    }
  });
  graphData = builder(JSON.parse(jsonArticles), dependencies);
}

// assign force layout
// settings:
// - attraction (default: 0.0005)
// - repulsion (default: 0.1)
// - gravity (default: 0.0001)
// - inertia (default: 0.6)
// - maxMove (default: 200)
// see https://graphology.github.io/standard-library/layout-force.html#settings
const graph = new Graph();
graph.import(graphData);
forceLayout.assign(graph, {
  maxIterations: 10000,
  settings: {
    attraction: 0.012,
    repulsion: 1,
    gravity: 0.03
  }
});

// export
const modifiedData = graph.export();
const output = {
  nodes: modifiedData.nodes,
  edges: modifiedData.edges,
};

await fs.writeFile("src/static/graph.json", JSON.stringify(output, null, 2), { encoding: "utf-8" });
