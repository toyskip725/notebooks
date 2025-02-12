import { getNotes } from "../../utils/article";
import NoteLinkElement from "../link/NoteLinkElement";

type Props = {
  jsonIndex: any;
  segment: string;
};

const SegmentIndexFactory = ({ jsonIndex, segment }: Props) => {
  const notes = getNotes(jsonIndex, segment);
  const listStyle: React.CSSProperties = {
    padding: "0em",
  };

  return (
    <div>
      <ul style={listStyle}>
        {notes.map(note => (
          <NoteLinkElement
            segment={segment} 
            section={note.section}
            path={note.path}
            title={note.title} />
          ))}
      </ul>
    </div>
  );
};

export default SegmentIndexFactory;