import type { MDXInstance } from "astro";
import defineConfig from "../../astro.config.mjs";

type Props = {
  dirpath: string;
  posts: MDXInstance<Record<string, any>>[]
}

const SideNavigation = ({ dirpath, posts }: Props) => {
  const displayPosts = posts.sort((post1, post2) => post1.frontmatter.section - post2.frontmatter.section);
  const to = defineConfig.base !== "" ? defineConfig.base : "/";
  
  const homeButtonStyle: React.CSSProperties = {
    display: "block",
    fontSize: "1.5em",
    color: "#000",
    margin: "20px 20px 20px 0px",
    textAlign: "left",
    textDecoration: "none"
  };

  return (
    <div>
      <a style={homeButtonStyle} href={to}>Notebooks</a>
      <p>{dirpath}</p>
      {displayPosts.map((post) => (<li><a href={post.url}>{post.frontmatter.title}</a></li>))}
    </div>
  );
};

export default SideNavigation;