import { useState } from "react";

type Props = {
  children: JSX.Element;
}

const Proof = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const mainStyle = {
    padding: "5px 0px 20px 0px"
  };

  const contentStyle = {
    borderLeft: "1px solid #000",
    padding: "0px 20px"
  };
  
  const buttonStyle = {
    fontSize: "1em",
    border: "1px solid #000",
    backgroundColor: "#fff",
    padding: "2px 15px",
  };

  const buttonText = isOpen ? "▼ 証明" : "▶ 証明を表示";

  return (
    <div style={mainStyle}>
      <button style={buttonStyle} onClick={handleClick}>{buttonText}</button>
      {isOpen && <div style={contentStyle}>{children}</div>}
    </div>
  );
};

export default Proof;