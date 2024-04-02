import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItemBox}>
      <img className={css.friendListImage} src={avatar} alt="Avatar" width="64" />
      <p className={css.friendName}>{name}</p>
      {isOnline ? (
        <p className={css.greenStatus}>Online</p>
      ) : (
        <p className={css.redStatus}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
