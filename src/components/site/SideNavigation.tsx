import type { MDXInstance } from "astro";

type Props = {
  dirpath: string;
  posts: MDXInstance<Record<string, any>>[]
}

const SideNavigation = ({ dirpath, posts }: Props) => {
  const displayPosts = posts.sort((post1, post2) => post1.frontmatter.section - post2.frontmatter.section);

  const mainStyle: React.CSSProperties = {
    padding: "20px 0px",
  };
  const headerStyle: React.CSSProperties = {
    padding: "0px",
    margin: "0px",
  };
  const listStyle: React.CSSProperties = {
    paddingLeft: "0px",
  };
  const linkElementStyle: React.CSSProperties = {
    listStyle: "none",
  };
  const linkTextStyle: React.CSSProperties = {
    color: "#000",
    textDecoration: "none",
  };
  const dividerStyle: React.CSSProperties = {
    width: "30%",
    margin: "7px 0px",
    borderTop: "1px dotted #999",
  };

  return (
    <div style={mainStyle}>
      <div style={dividerStyle}/>
      {displayPosts.map((post) => (
        <>
          <li style={linkElementStyle}>
            <a style={linkTextStyle} href={post.url}>{post.frontmatter.title}</a>
          </li>
          <div style={dividerStyle}/>
        </>
      ))}
    </div>
  );
};

export default SideNavigation;