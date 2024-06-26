import css from '../Profile/Profile.module.css';

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={css.profileWrapper + ' ' + 'container'}>
      <div className={css.userTopBox}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.socialBox}>
        <li className={css.socialItemBox}>
          <span className={css.socialTop}>Followers</span>
          <span className={css.socialBottom}>{followers}</span>
        </li>
        <li className={css.socialItemBox}>
          <span className={css.socialTop}>Views</span>
          <span className={css.socialBottom}>{views}</span>
        </li>
        <li className={css.socialItemBox}>
          <span className={css.socialTop}>Likes</span>
          <span className={css.socialBottom}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
