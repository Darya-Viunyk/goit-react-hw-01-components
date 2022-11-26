import propTypes from "prop-types";
export const FriendList=({friends:{isOnline,avatar,name}})=>{
    return(
<ul>
<li>
  <span>{isOnline}</span>
  <img src={avatar} alt="User avatar" width="48" />
  <p>{name}</p>
</li>
<li>
  <span>{isOnline}</span>
  <img src={avatar} alt="User avatar" width="48" />
  <p>{name}</p>
</li>
<li>
  <span>{isOnline}</span>
  <img src={avatar} alt="User avatar" width="48" />
  <p>{name}</p>
</li>
<li>
  <span>{isOnline}</span>
  <img src={avatar} alt="User avatar" width="48" />
  <p>{name}</p>
</li>
<li>
  <span>{isOnline}</span>
  <img src={avatar} alt="User avatar" width="48" />
  <p>{name}</p>
</li>
</ul>
)
};
FriendList.propTypes={
    isOnline:propTypes.string.isRequired,
    avatar:propTypes.string.isRequired,
    name:propTypes.string.isRequired,
};