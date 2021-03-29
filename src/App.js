import './App.css';
import React from 'react';
import './App.css';
import User from './components/Profile/Profile.jsx';
import user from './components/Profile/Profile.json';

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
    </div>
  );
}

export default App;
