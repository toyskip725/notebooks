import { mainColor } from "../utils/mainColor";

type Props = {
  showColor: boolean;
};

const PATH = "lambda-calculus";
const LambdaCalculus = ({ showColor }: Props) => {
  const mainStyle: React.CSSProperties = {};
  if (showColor) {
    mainStyle.borderLeft = `solid 5px ${mainColor.crimson}`;
  }

  return (
    <div style={mainStyle}>
      <ol>
        <li><a href={`${import.meta.env.SITE}${import.meta.env.BASE_URL}/${PATH}/untyped-lambda-calculus`}>型なしラムダ計算</a></li>
        <li><a href={`${import.meta.env.SITE}${import.meta.env.BASE_URL}/${PATH}/church-rosser-theorem`}>チャーチ・ロッサーの定理</a></li>
      </ol>
    </div>
  );
};

export default LambdaCalculus;