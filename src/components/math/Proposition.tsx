
type Props = {
  name?: string;
  children: JSX.Element;
};

const Proposition= ({ name, children }: Props) => {
  const layoutStyle = {
    border: "1px solid #000",
    borderColor: "#007989",
    padding: "5px 20px",
    margin: "20px 0px"
  }

  const titleStyle = {
    color: "#ffffff",
    backgroundColor: "#007989",
    fontWeight: "bold",
    width: "fit-content",
    padding: "2px 8px"
  };

  return (
  <div style={layoutStyle}>
    <p style={titleStyle}>
      <span className="math-numbering">命題</span>
      {name !== undefined && <span> ({name})</span>}
    </p>
    {children}
  </div>
  );
}

export default Proposition;