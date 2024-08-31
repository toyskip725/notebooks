import { mainColor } from "../utils/mainColor";

type Props = {
  showColor: boolean;
};

const PATH = "algebra";
const Algebra = ({ showColor }: Props) => {
  const mainStyle: React.CSSProperties = {};
  if (showColor) {
    mainStyle.borderLeft = `solid 5px ${mainColor.navy}`;
  }

  return (
    <div style={mainStyle}>
      <ol>
        <li><a href={`${import.meta.env.SITE}${import.meta.env.BASE_URL}/${PATH}/group-basics`}>群</a></li>
      </ol>
    </div>
  );
};

export default Algebra;