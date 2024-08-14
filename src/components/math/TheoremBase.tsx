const TheoremEnum = {
  proposition: "命題",
  lemma: "補題",
  theorem: "定理",
  corollary: "系",
} as const;
type TheoremType = keyof typeof TheoremEnum;

type Props = {
  name?: string;
  theoremType: TheoremType;
  children: JSX.Element;
};

export type TheoremProps = Omit<Props, "theoremType">;

const TheoremBase = ({ name, theoremType, children }: Props) => {
  const layoutStyle = {
    border: "1px solid #007989",
    borderLeft: "10px solid #007989",
    padding: "5px 20px",
    margin: "20px 0px"
  }

  const titleStyle = {
    color: "#ffffff",
    backgroundColor: "#007989",
    fontWeight: "bold",
    width: "fit-content",
    padding: "2px 8px"
  };

  return (
  <div style={layoutStyle}>
    <p style={titleStyle}>
      <span className="math-numbering">{TheoremEnum[theoremType]}</span>
      {name !== undefined && <span> ({name})</span>}
    </p>
    {children}
  </div>
  );
}

export default TheoremBase;