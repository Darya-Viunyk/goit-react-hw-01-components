import propTypes from 'prop-types';
import style from './Profile.module.css';
export const Profile = ({ user }) => {
  console.log(user);
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={user.avatar} alt={user.username} className={style.avatar} />
        <p className={style.name}>{user.username}</p>
        <p className={style.tag}>@{user.tag}</p>
        <p className={style.location}>{user.location}</p>
      </div>

      <ul className={style.starts}>
        <li className={style.startsItem}>
          <span className={style.label}>Followers</span>
          <span className={style.like}>{user.stats.followers}</span>
        </li>
        <li className={style.startsItem}>
          <span className={style.label}>Views</span>
          <span className={style.like}>{user.stats.views}</span>
        </li>
        <li className={style.startsItem}>
          <span className={style.label}>Likes</span>
          <span className={style.like}>{user.stats.likes}</span>
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
