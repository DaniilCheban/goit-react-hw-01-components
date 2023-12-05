import {Profile} from './Profile'; 
import './Profile.css'; 
import user from 'components/user.json';
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
    </div>
  );
};

export  {App};
