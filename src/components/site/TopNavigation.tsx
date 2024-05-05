import { WebsiteTitle } from "../../utils/constants";

const TopNavigation = () => {
  const headerStyle: React.CSSProperties = {
    padding: "20px 10px 0px 10px",
  };
  const titleStyle: React.CSSProperties = {
    color: "#000",
    textAlign: "left",
    textDecoration: "none"
  };

  return (
    <header style={headerStyle}>
      <a style={titleStyle} href={import.meta.env.BASE_URL}>{WebsiteTitle}</a>
    </header>
  );
};

export default TopNavigation;