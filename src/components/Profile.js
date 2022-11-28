import propTypes from 'prop-types';
export const Profile = ({ user }) => {
  console.log(user);
  return (
    <div>
      <div>
        <img src={user.avatar} alt={user.username} />
        <p>{user.username}</p>
        <p>{user.tag}</p>
        <p>{user.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{user.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{user.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  user: propTypes.shape({
    username: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.object.isRequired,
  }),
};
