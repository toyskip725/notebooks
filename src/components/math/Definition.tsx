
type Props = {
  name?: string;
  children: JSX.Element;
};

const Definition = ({ name, children }: Props) => {
  const layoutStyle = {
    border: "1px solid #000",
    borderColor: "#0a214f",
    padding: "5px 20px",
    margin: "20px 0px"
  }

  const titleStyle = {
    color: "#fff",
    backgroundColor: "#0a214f",
    fontWeight: "bold",
    width: "fit-content",
    padding: "2px 8px",
  };

  return (
  <div style={layoutStyle}>
    <p style={titleStyle}>
      <span className="math-numbering">定義</span>
      {name !== undefined && <span> ({name})</span>}
    </p>
    {children}
  </div>
  );
}

export default Definition;