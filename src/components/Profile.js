import propTypes from "prop-types";
export const Profile =({user:{username,tag,location,avatar,stats}})=>{
return (
<div>
  <div>
    <img
      src={avatar}
      alt={username} 
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span></span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span></span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span></span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
);
};
Profile.propTypes = {
  username: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.number.isRequired,
};