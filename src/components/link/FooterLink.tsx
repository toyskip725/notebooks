type Props = {
  title: string;
  url: string;
  icon: "none" | "back";
};

const FooterLink = ({ title, url, icon }: Props) => {
  const iconText = icon === "back" ? "arrow_back_2" : "";
  
  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
  };
  const cardStyle: React.CSSProperties = {
    width: "50%",
    borderTop: "solid 1px #2a2a31",
    color: "#2a2a31",
    padding: "20px",
    marginTop: "20px",
    display: "inline-flex",
    alignItems: "center",
  };

  return (
      <a href={url} style={linkStyle}>
        <div style={cardStyle}>
          {icon !== "none" && <span className="material-symbols-outlined">{iconText}</span>}
          <div>{title}</div>
        </div>
      </a>
  );
}

export default FooterLink;