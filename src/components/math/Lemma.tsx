import TheoremBase, { type TheoremProps } from "./TheoremBase";

const Lemma = ({ name, children }: TheoremProps) => {
  return (
    <TheoremBase name={name} theoremType="lemma">
      {children}
    </TheoremBase>
  );
};

export default Lemma;