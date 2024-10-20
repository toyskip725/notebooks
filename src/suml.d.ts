declare module "*.suml" {
  const frontmatter: Record<string, unknown>;
  const content: string;

  export default content;
};