import propTypes from 'prop-types';
import style from './FrirndListItem.module.css';
export const FriendListItem = ({ friend }) => {
  const statusClass = [style.status, friend.isOnline && style.active].join(' ');

  console.log(friend);
  return (
    <li className={style.item}>
      <span className={statusClass}>{friend.isOnline}</span>
      <img
        className={style.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={style.name}>{friend.name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  friends: propTypes.shape({
    avatar: propTypes.string.isRequired,
    percentage: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};
