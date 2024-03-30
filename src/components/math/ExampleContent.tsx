import { useState } from "react";

type Props = {
  children: JSX.Element;
};

const ExampleContent = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  const buttonText = isOpen ? "▲" : "▼";
  const buttonStyle: React.CSSProperties = {
    fontSize: "1em",
    color: "#a22041",
    backgroundColor: "#fff",
    border: "1px none #fff",
    padding: "10px"
  };
  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end"
  };

  return (
  <div>
    <div style={buttonContainerStyle}>
      <button style={buttonStyle} onClick={handleClick}>{buttonText}</button>
    </div>
    {isOpen && <div>{children}</div>}
  </div>
  );
};

export default ExampleContent;