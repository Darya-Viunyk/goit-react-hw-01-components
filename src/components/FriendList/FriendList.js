import propTypes from 'prop-types';
import style from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};
