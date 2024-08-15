import TheoremBase, { type TheoremProps } from "./TheoremBase";

const Theorem = ({ name, children }: TheoremProps) => {
  return (
    <TheoremBase name={name} theoremType="theorem">
      {children}
    </TheoremBase>
  );
};

export default Theorem;