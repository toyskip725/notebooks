import NoteLinkElement from "../components/link/NoteLinkElement";

const PATH = "type-theory";
const TypeTheory = () => {
  const listStyle: React.CSSProperties = {
    padding: "0em",
  };

  return (
    <div>
      <ul style={listStyle}>
        <NoteLinkElement segment={PATH} section={1} path={"simply-typed-lambda-calculus"} title={"単純型付きラムダ計算 (1)"} />
        <NoteLinkElement segment={PATH} section={2} path={"simple-additional-types"} title={"単純型付きラムダ計算 (2) - さまざまな型"} />
      </ul>
    </div>
  );
};

export default TypeTheory;