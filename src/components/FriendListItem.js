// import propTypes from 'prop-types';
import { FriendList } from './FriendList';

const FriendListItem = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  );
};
// FriendListItem.propTypes = {
//   friends: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.string.isRequired,
//     })
//   ),
// };
export default FriendListItem;
