import propTypes from 'prop-types';
export const FriendListItem = ({ friend }) => {
  console.log(friend);
  return (
    <li>
      <span>{friend.isOnline}</span>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
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
