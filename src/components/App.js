import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
    </div>
  );
};
