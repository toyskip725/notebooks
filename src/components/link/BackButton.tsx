type Props = {
  href: string;
};

const BackButton = ({ href }: Props) => {
  const layoutStyle: React.CSSProperties = {
    width: "fit-content",
    margin: "20px 0px",
    border: "1px solid #000",
  };
  const linkStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    color: "#000",
    textDecoration: "none",
    padding: "7px 10px 7px 5px",
  };

  return (
    <div style={layoutStyle}>
      <a href={href} style={linkStyle}>
        <span className="material-symbols-outlined">arrow_back_2</span> 
        <span>戻る</span>
      </a>
    </div>
  );
};

export default BackButton;