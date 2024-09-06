type Props = {
  description: string;
};

const HeadingFrame = ({ description }: Props) => {
  const frameStyle: React.CSSProperties = {
    width: "fit-content",
    border: "1px solid #2a2a31",
    padding: "0em 0.25em",
    marginTop: "2.5em",
  };

  return (
    <p style={frameStyle}>{description}</p>
  );
};

export default HeadingFrame;