const avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png";
export const Profile =({user:{username,tag,location,avatar,stats}})=>{
return (
<div >
  <div >
    <img
      src={avatar}
      alt={username}
      
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul>{stats}
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
      <span>{user.stats.likes}</span>
    </li>
  </ul>
</div>
);
};