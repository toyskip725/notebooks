type Props = {
  children: JSX.Element;
};

const Memo = ({ children }: Props) => {
  const mainStyle: React.CSSProperties = {
    backgroundColor: "#f0f0f0",
    fontSize: "0.9em",
    padding: "5px 20px",
    margin: "20px 0px",
  };

  const headerStyle: React.CSSProperties = {
    color: "#fff",
    backgroundColor: "#666",
    display: "inline-block",
    padding: "2px 10px",
    margin: "10px 0px 0px 0px",
  };

  return (
    <div style={mainStyle}>
      <p style={headerStyle}>Memo</p>
      {children}
    </div>
  );
};

export default Memo;