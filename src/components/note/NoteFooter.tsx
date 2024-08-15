import "./NoteFooter.css";

type Props = {
  version: string;
  lastUpdated: string;
};

const NoteFooter = ({ version, lastUpdated }: Props) => {
  const versionInfo = `バージョン :  ${version}`;
  const lastUpdatedInfo = `最終更新日 :  ${lastUpdated}`;

  return (
    <div className="note-footer">
      <p className="note-footer-text">
        {versionInfo}<br />
        {lastUpdatedInfo}
      </p>
    </div>
  );
};

export default NoteFooter;
