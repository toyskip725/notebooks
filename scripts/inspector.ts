import { htmlCompiler, core, preprocessor } from "@sumiml/core";
import { math } from "@sumiml/math";
import { util } from "@sumiml/util";

const compiler = htmlCompiler([core("html"), math("html"), util("html")]);
const doc = await preprocessor("src/articles/type-theory/1_simply-typed-lambda-calculus/document.suml");

console.time("compiler");
const output = compiler(doc);
console.timeEnd("compiler");
