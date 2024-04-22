type Props = {
  date: string;
};

const LastUpdatedNotification = ({ date }: Props) => {
  const text = `最終更新日 :  ${date}`;

  const mainStyle: React.CSSProperties = {
    borderTop: "1px solid #000",
    marginTop: "20px",
    width: "50%",
  };

  const textStyle: React.CSSProperties = {
    color: "#000",
    fontSize: "0.9em",
    padding: "5px 0px",
  };

  return (
    <div style={mainStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default LastUpdatedNotification;
