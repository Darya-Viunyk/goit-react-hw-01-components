import propTypes from 'prop-types';
import style from './Profile.module.css';
export default function Profile(user) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={username} className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.starts}>
        <li className={style.startsItem}>
          <span className={style.label}>Followers</span>
          <span className={style.like}>{followers}</span>
        </li>
        <li className={style.startsItem}>
          <span className={style.label}>Views</span>
          <span className={style.like}>{views}</span>
        </li>
        <li className={style.startsItem}>
          <span className={style.label}>Likes</span>
          <span className={style.like}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }).isRequired,
};
