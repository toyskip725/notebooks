import NoteLinkElement from "../components/link/NoteLinkElement";

const PATH = "lambda-calculus";
const LambdaCalculus = () => {
  const listStyle: React.CSSProperties = {
    padding: "0em",
  };

  return (
    <div>
      <ul style={listStyle}>
        <NoteLinkElement segment={PATH} section={1} path={"untyped-lambda-calculus"} title={"型なしラムダ計算"} />
        <NoteLinkElement segment={PATH} section={2} path={"church-rosser-theorem"} title={"チャーチ・ロッサーの定理"} />
        <NoteLinkElement segment={PATH} section={3} path={""} title={"コンビネータ論理 (1)"} />
        <NoteLinkElement segment={PATH} section={4} path={""} title={"コンビネータ論理 (2)"} />
      </ul>
    </div>
  );
};

export default LambdaCalculus;