import type { CSSProperties } from "react";

type Heading = {
  depth: number;
  slug: string;
  text: string;
};

type Props = {
  headings: Heading[];
};

const TableofContents = ({ headings }: Props) => {
  const mainStyle: CSSProperties = {
    padding: "20px 20px"
  };
  const listStyle: React.CSSProperties = {
    paddingLeft: "20px",
    margin: "0px"
  };
  const listElementStyle: React.CSSProperties = {
    listStyle: "none"
  };
  const linkStyle: React.CSSProperties = {
    color: "#999",
    fontSize: "0.8em",
    textDecoration: "none"
  };

  let current = 0; 
  const listElement = (index: number) => { return (
    <li style={listElementStyle}>
      <a href={`#${headings[index].slug}`} style={linkStyle}>{headings[index].text}</a>
    </li>
    );
  };
  const render = (): JSX.Element[] => {
    const output = [];

    while (true) {
      // 最初の要素
      if (current === 0) {
        output.push(listElement(current));
        current++;
      }

      // 最後の要素
      if (current === headings.length) {
        break;
      }

      // 階層が同じ場合
      if (headings[current - 1].depth === headings[current].depth) {
        output.push(listElement(current));
        current++;
        continue;
      }
      
      // 階層が深くなる場合
      if (headings[current - 1].depth < headings[current].depth) {
        current++;
        output.push(
          <ul style={listStyle}>
            {listElement(current - 1)}
            {render()}
          </ul>
        );
        continue;
      }

      // 階層が浅くなる場合
      if (headings[current - 1].depth > headings[current].depth) {
        output.push(listElement(current));
        current++;
        break;
      }
    }

    return output;
  };

  return (
    <div style={mainStyle}>
      {render()}
    </div>
  )
};

export default TableofContents;