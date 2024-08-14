import TheoremBase, { type TheoremProps } from "./TheoremBase";

const Proposition = ({ name, children }: TheoremProps) => {
  return (
    <TheoremBase name={name} theoremType="proposition">
      {children}
    </TheoremBase>
  );
};

export default Proposition;