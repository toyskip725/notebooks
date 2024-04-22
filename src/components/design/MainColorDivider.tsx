import { mainColor } from "../../utils/mainColor";

const MainColorDivider = () => {
  const mainStyle: React.CSSProperties = {
    padding: "0px 0px 5px 0px",
  };

  return (
    <div style={mainStyle}>
      <svg width="120" height="10" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="0" width="10" height="10" stroke={mainColor.navy} fill={mainColor.navy} stroke-width="1"/>
        <rect x="40" y="0" width="10" height="10" stroke={mainColor.teal} fill={mainColor.teal} stroke-width="1"/>
        <rect x="70" y="0" width="10" height="10" stroke={mainColor.crimson} fill={mainColor.crimson} stroke-width="1"/>
        <rect x="100" y="0" width="10" height="10" stroke={mainColor.orange} fill={mainColor.orange} stroke-width="1"/>
      </svg>
    </div>
  );
};

export default MainColorDivider;