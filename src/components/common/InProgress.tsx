type Props = {
  target: "page" | "section",
};

const InProgress = ({ target }: Props) => {
  const pageText = "このページは編集中です。 今後大きく内容が変更される可能性があります。";
  const sectionText = "このセクションは編集中です。";
  const text = target === "page" ? pageText : sectionText;

  const mainStyle: React.CSSProperties = {
    backgroundColor: "#cccccc",
    marginTop: target === "page" ? "50px" : "20px",
    marginBottom: "40px",
  };

  const wrapperStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
  };

  const iconStyle: React.CSSProperties = {
    color: "#666",
    padding: "8px 15px",
  };

  const descriptionStyle: React.CSSProperties = {
    color: "#666",
    fontSize: "0.9em",
    padding: "8px",
  }

  return (
    <div style={mainStyle}>
      <div style={wrapperStyle}>
        <span className="material-symbols-outlined" style={iconStyle}>error</span>
        <p style={descriptionStyle}>{text}</p>
      </div>
    </div>
  );
};

export default InProgress;