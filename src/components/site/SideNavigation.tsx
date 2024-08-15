import type { MDXInstance } from "astro";

type Props = {
  posts: MDXInstance<Record<string, any>>[];
  currentPath: string;
}

const SideNavigation = ({ posts, currentPath }: Props) => {
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
    color: "#2a2a31",
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
      {displayPosts.map((post) => {
        const url = post.url ?? "";
        const linkText = currentPath.includes(url) ? `▶ ${post.frontmatter.title}` : post.frontmatter.title;
        return (
          <>
            <li style={linkElementStyle}>
              <a style={linkTextStyle} href={post.url}>{linkText}</a>
            </li>
            <div style={dividerStyle}/>
          </>
        );
      })}
    </div>
  );
};

export default SideNavigation;