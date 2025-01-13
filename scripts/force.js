import Graph from "graphology";
import forceLayout from 'graphology-layout-force';
import { readFileSync, writeFileSync } from "fs";

const file = readFileSync("src/static/posts.json", { encoding: "utf-8" });
const initData = JSON.parse(file);

const graph = new Graph();
graph.import(initData);
forceLayout.assign(graph, {maxIterations: 50});

const modifiedData = graph.export();
const output = {
  nodes: modifiedData.nodes,
  edges: modifiedData.edges,
};

writeFileSync("src/static/newposts.json", JSON.stringify(output, null, 2), { encoding: "utf-8" });