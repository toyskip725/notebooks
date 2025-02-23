import MainColorDivider from "../design/MainColorDivider";
import NoteSegmentBanner from "./NoteSegmentBanner";

type Props = {
  jsonIndex: any;
  title: string;
  pathname: string;
};

const NoteHeader = ({ jsonIndex, title, pathname }: Props) => {
  return (
    <div>
      <NoteSegmentBanner jsonIndex={jsonIndex} path={pathname} />
      <h1>{title}</h1>
      <MainColorDivider />
    </div>
  );
};

export default NoteHeader;