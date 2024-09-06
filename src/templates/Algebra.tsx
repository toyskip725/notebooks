import NoteLinkElement from "../components/link/NoteLinkElement";

const PATH = "algebra";
const Algebra = () => {
  const listStyle: React.CSSProperties = {
    padding: "0em",
  };

  return (
    <div>
      <ul style={listStyle}>
        <NoteLinkElement segment={PATH} section={1} path={"group-basics"} title={"群"} />
      </ul>
    </div>
  );
};

export default Algebra;