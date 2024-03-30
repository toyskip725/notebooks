import type { MDXInstance } from "astro";

type Props = {
  parentDirectoryName: string;
  posts: MDXInstance<Record<string, any>>[]
}

const SideNavigation = ({ parentDirectoryName, posts }: Props) => {
  const relevantPosts = posts.filter((post) => post.url?.includes(parentDirectoryName));
  return (
    <div>
      <p>{parentDirectoryName}</p>
      {relevantPosts.map((post) => (<a href={post.url}>{post.frontmatter.title}</a>))}
    </div>
  );
};

export default SideNavigation;