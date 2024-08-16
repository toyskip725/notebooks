import MainColorDivider from "../design/MainColorDivider";

type Props = {
  title: string;
};

const NoteHeader = ({ title }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <MainColorDivider />
    </div>
  );
};

export default NoteHeader;