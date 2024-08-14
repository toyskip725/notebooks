import TheoremBase, { type TheoremProps } from "./TheoremBase";

const Corollary = ({ name, children }: TheoremProps) => {
  return (
    <TheoremBase name={name} theoremType="corollary">
      {children}
    </TheoremBase>
  );
};

export default Corollary;