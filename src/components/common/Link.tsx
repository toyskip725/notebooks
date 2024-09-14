type Props = {
  title: string;
  path: string;
};

const Link = ({ title, path }: Props) => {
  const href = `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
  return(
    <a href={href}>{title}</a>
  );
};

export default Link;