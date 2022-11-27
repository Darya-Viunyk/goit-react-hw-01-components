import { Profile } from './Profile';
import { Statistics } from './Statistics';
import FriendListItem from './FriendListItem';

import user from '../components/user.json';
import data from '../components/data.json';
import friends from '../components/friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendListItem friends={friends} />
    </div>
  );
};
