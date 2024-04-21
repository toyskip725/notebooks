type Props = {
  children: JSX.Element;
};

const References = ({ children }: Props) => {
  const mainStyle: React.CSSProperties = {
    padding: "0px 0px 20px 0px",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: "1.2em",
    fontWeight: "bold",
  };

  const contentStyle: React.CSSProperties = {
    borderLeft: "1px solid #000",
    fontSize: "0.9em",
    lineHeight: "1.75em",
    padding: "5px 0px 5px 15px",
  };

  return (
    <div style={mainStyle}>
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

export default References;