type Props = {
  segment: string;
  section: number;
  path: string;
  title: string;
};

const NoteLinkElement = ({ segment, section, path, title }: Props) => {
  const href = `${import.meta.env.SITE}${import.meta.env.BASE_URL}/${segment}/${path}`;

  const mainStyle: React.CSSProperties = {
    listStyle: "none",
  };
  const numberStyle = {
    padding: "0px 10px",
    margin: "4px",
  };
  const linkStyle: React.CSSProperties = {
    display: "inline-block",
  };
  const sectionStyle: React.CSSProperties = {
    padding: "0em 1em",
  };

  return (
    <li style={mainStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={numberStyle}>{section}</span>
        { path !== "" ? (
          <a href={href} style={linkStyle}>
            <span style={sectionStyle}>{title}</span>
          </a>
        ) : (
          <span style={sectionStyle}>{title}</span>
        )}
      </div>
    </li>
  );
};

export default NoteLinkElement;