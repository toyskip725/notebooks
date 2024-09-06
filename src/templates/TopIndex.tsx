import PageLinkCard from "../components/link/PageLinkCard";

const TopIndex = () => {
  const linkListStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  };
  return (
    <div style={linkListStyle}>
      <PageLinkCard path={"about"} title={"このノートについて"} />
      <PageLinkCard path={"posts"} title={"ノート一覧"} />
      <PageLinkCard path={"history"} title={"更新履歴"} />
    </div>
  );
};

export default TopIndex;