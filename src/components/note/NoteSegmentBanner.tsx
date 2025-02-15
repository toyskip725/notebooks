import { getDisplayNameWithStyle } from "../../utils/article";
import { findNoteSegmentInfo } from "../../utils/category";

type Props = {
  jsonIndex: any;
  path: string;
};

const NoteSegmentBanner = ({ jsonIndex, path }: Props) => {
  const segment = path.split('/').pop();
  const info = segment !== undefined ? getDisplayNameWithStyle(jsonIndex, segment) : undefined;

  const bannerStyle = {
    width: "fit-content",
    color: "#fafafa",
    backgroundColor: info?.color,
    fontSize: "0.9rem",
    padding: "2px 10px",
    marginTop: "20px",
  };
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <a href={path} style={linkStyle}>
      <p style={bannerStyle}>{info?.value}</p>
    </a>
  );
};

export default NoteSegmentBanner;