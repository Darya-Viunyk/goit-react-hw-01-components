
export const FriendList=({friends:{isOnline,avatar,name,}})=>{
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