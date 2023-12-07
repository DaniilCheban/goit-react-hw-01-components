import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import friends from '../data/friends.json';
import user from '../data/user.json';
import data from '../data/data.json';

const App = () => {
  return (
    <div className="app">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};

export { App };
