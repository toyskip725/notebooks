type Props = {
  version: string;
  lastUpdated: string;
};

const LastUpdatedNotification = ({ version, lastUpdated }: Props) => {
  const versionInfo = `バージョン :  ${version}`;
  const lastUpdatedInfo = `最終更新日 :  ${lastUpdated}`;

  const mainStyle: React.CSSProperties = {
    borderTop: "1px solid #2a2a31",
    paddingTop: "5px",
    marginTop: "20px",
    width: "50%",
  };

  const textStyle: React.CSSProperties = {
    color: "#2a2a31",
    fontSize: "0.9em",
  };

  return (
    <div style={mainStyle}>
      <p style={textStyle}>
        {versionInfo}<br />
        {lastUpdatedInfo}
      </p>
    </div>
  );
};

export default LastUpdatedNotification;
