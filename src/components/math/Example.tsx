type Props = {
  name?: string;
  children: JSX.Element;
};

const Example = ({ name, children }: Props) => {

  
  const lineStyle: React.CSSProperties = {
    borderTop: "1px dashed #a22041",
    borderBottom: "1px dashed #a22041",
    padding: "5px 20px",
    margin: "45px 0px 20px 0px",
    position: "relative"
  };
  
  const titleStyle: React.CSSProperties = {
    color: "#fff",
    backgroundColor: "#a22041",
    fontWeight: "bold",
    width: "fit-content",
    padding: "2px 8px",
    position: "absolute",
    top: "-1.9em"
  };

  return (
  <div style={lineStyle}>
    <p style={titleStyle}>
      <span className="math-numbering">例</span>
      {name !== undefined && <span> ({name})</span>}
    </p>
    {children}
  </div>
  );
}

export default Example;