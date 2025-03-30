import "./ProfileCard.css";

type Profile = {
  name: string;
  link: Record<string, string>;
};

type LinkProps = {
  title: string;
  url: string;
};

const ProfileCardLink = ({ title, url }: LinkProps) => {
  return (
    <>
      <li className="profile-card-link">
        <span className="profile-card-link-header">{title}</span>
        <a href={url}>{url}</a>
      </li>
      <li className="profile-card-link-button">
        <a href={url} className="profile-card-link-button-text">{title}</a>
      </li>
    </>
  );
}

type Props = {
  profile: Profile;
};

const ProfileCardLayout = ({ profile }: Props) => {
  return (
    <div className="card-container">
      <div>
        <img src="profile.svg" className="icon" />
      </div>
      <div className="profile-content">
        <div className="profile-card-main">
          <p className="profile-card-header" id="profile-card-header">AUTHOR</p>
          <p className="profile-card-name">{profile.name}</p>
        </div>
        <ul className="profile-card-link-list">
          {Object.entries(profile.link).map((entry) => 
            <ProfileCardLink title={entry[0]} url={entry[1]} />
          )}
        </ul>
      </div>
    </div>
  );
};

const profileInfo: Profile = {
  name: "澄 (toyskip725)",
  link: {
    Website: "https://toyskip725.github.io",
    GitHub: "https://github.com/toyskip725",
    X: "https://x.com/toyskip725",
  },
};
const ProfileCard = () => <ProfileCardLayout profile={profileInfo} />;
export default ProfileCard;