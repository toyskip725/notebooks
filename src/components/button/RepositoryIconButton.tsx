const repositoryPath = "https://github.com/toyskip725/notebooks";

const RepositoryIconButton = () => {
  const iconSrc = `${import.meta.env.SITE}${import.meta.env.BASE_URL}github-mark.svg`;

  const mainStyle: React.CSSProperties = {
    display: "inline-flex",
    border: "1px solid #505050",
    padding: "10px 5px 5px 10px"
  };
  const wrapperStyle: React.CSSProperties = {
    height: "50px",
    display: "inline-flex",
    alignItems: "center"
  };
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    border: "1px none #000",
  };
  const iconStyle: React.CSSProperties = {
    height: "50px"
  };
  const textStyle: React.CSSProperties = {
    color: "#000",
    padding: "10px 20px"
  };

  return (
    <div style={mainStyle}>
      <a href={repositoryPath} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
        <div style={wrapperStyle}>
          <img src={iconSrc} alt="GitHub repository" style={iconStyle}/>
          <span style={textStyle}>GitHub</span>
        </div>
      </a>
    </div>
  );
};

export default RepositoryIconButton;