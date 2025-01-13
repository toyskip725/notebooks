type Props = {
  path: string;
  title: string;
}

const PageLinkCard = ({ path, title }: Props) => {
  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
  };
  const cardStyle: React.CSSProperties = {
    maxWidth: "400px",
    border: "1px solid #2a2a31",
    padding: "1em",
    margin: "0.5em",
  };
  const baseUrl = import.meta.env.SITE.includes("localhost") 
    ? import.meta.env.SITE
    : import.meta.env.SITE + import.meta.env.BASE_URL;

  return (
    <a href={`${baseUrl}/${path}`} style={linkStyle} >
      <div style={cardStyle}>
        <p>{title}</p>
      </div>
    </a>
  );
};

export default PageLinkCard;