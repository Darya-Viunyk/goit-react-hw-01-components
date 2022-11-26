
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