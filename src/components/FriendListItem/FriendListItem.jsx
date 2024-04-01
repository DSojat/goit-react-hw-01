import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline 
        ? (<p className={css.greenStatus}>Online</p>) 
        : (<p className={css.redStatus}>Offline</p>)}
    </div>
  );
};

export default FriendListItem;
