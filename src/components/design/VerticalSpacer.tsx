type Props = {
  height: React.CSSProperties["height"];
};

const VerticalSpacer = ({ height }: Props) => {
  const mainStyle: React.CSSProperties = {
    height: height,
  };

  return (
    <div style={mainStyle}></div>
  );
};

export default VerticalSpacer;