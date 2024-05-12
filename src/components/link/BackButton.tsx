type Props = {
  name: string;
  href: string;
};

const BackButton = ({ name, href }: Props) => {
  const layoutStyle: React.CSSProperties = {
    margin: "20px 0px",
  };
  const linkStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    color: "#000",
    textDecoration: "none",
    fontSize: "0.8em",
  };

  return (
    <div style={layoutStyle}>
      <a href={href} style={linkStyle}>
        <span className="material-symbols-outlined">arrow_back</span> 
        <span>{name}に戻る</span>
      </a>
    </div>
  );
};

export default BackButton;