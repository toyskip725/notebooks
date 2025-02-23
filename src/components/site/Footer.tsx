import { CopyRight } from "../../utils/constants";

const Footer = () => {
  const textStyle: React.CSSProperties = {
    color: "#999",
    fontSize: "0.8em",
    textAlign: "center",
    margin: "30px",
  };

  return (
    <footer>
      <p style={textStyle}>{CopyRight}</p>
    </footer>
  );
};

export default Footer;