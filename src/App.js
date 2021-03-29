import './App.css';
import React from 'react';
import './App.css';

import User from './components/Profile/Profile.jsx';
import user from './components/Profile/Profile.json';

import statisticData from './components/Statistic/statistical-data.json';
import Statistic from './components/Statistic/Statistic';

// import friends from './components/FriendsList/FriendsList.json';
// import FriendsList from './components/FriendsList/FriendsList';

function App() {
  return (
    <div className="App">
      <h2 className="title">User Profile</h2>
      <User
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic stats={statisticData} />
      {/* <h2 className="title">Friends List</h2>
      <FriendsList friends={friends} /> */}
    </div>
  );
}

export default App;
