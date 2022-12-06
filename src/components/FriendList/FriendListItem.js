import propTypes from 'prop-types';
import style from './FrirndListItem.module.css';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClass = [style.status, isOnline && style.active].join(' ');

  return (
    <li className={style.item}>
      <span className={statusClass}>{isOnline}</span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: propTypes.string,
  isOnline: propTypes.bool,
  name: propTypes.string,
};
