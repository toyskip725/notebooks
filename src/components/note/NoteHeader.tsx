import MainColorDivider from "../design/MainColorDivider";
import NoteSegmentBanner from "./NoteSegmentBanner";

type Props = {
  title: string;
  pathname: string;
};

const NoteHeader = ({ title, pathname }: Props) => {
  return (
    <div>
      <NoteSegmentBanner path={pathname} />
      <h1>{title}</h1>
      <MainColorDivider />
    </div>
  );
};

export default NoteHeader;