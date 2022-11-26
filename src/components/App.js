import { Profile } from "./Profile"
import { Statistics } from "./Statistics"
import { FriendList } from "./FriendList";

import user from "../components/user.json"
import data from "../components/data.json"
import friends from "../components/friends.json"



export const App = () => {
  return (
    <div>
  <Profile user={user}/>
  <Statistics data={data[0]}/>
  <FriendList friends={friends[0]}/>;
    </div>
  );
};
