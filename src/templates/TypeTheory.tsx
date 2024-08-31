import { mainColor } from "../utils/mainColor";

type Props = {
  showColor: boolean;
};

const PATH = "type-theory";
const TypeTheory = ({ showColor }: Props) => {
  const mainStyle: React.CSSProperties = {};
  if (showColor) {
    mainStyle.borderLeft = `solid 5px ${mainColor.crimson}`;
  }

  return (
    <div style={mainStyle}>
      <ol>
        <li><a href={`${import.meta.env.SITE}${import.meta.env.BASE_URL}/${PATH}/simply-typed-lambda-calculus`}>単純型付きラムダ計算</a></li>
      </ol>
    </div>
  );
};

export default TypeTheory;