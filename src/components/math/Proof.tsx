import { useState } from "react";
import "./Proof.css";

type Props = {
  children: JSX.Element;
}

const Proof = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const buttonText = isOpen ? "▼ 証明" : "▶ 証明を表示";

  return (
    <div className="proof">
      <button className="proof-button" onClick={handleClick}>{buttonText}</button>
      {isOpen && <div className="proof-content">{children}</div>}
    </div>
  );
};

export default Proof;