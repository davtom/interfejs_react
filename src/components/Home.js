import React from 'react';
import logo from './logo.svg';
import UserName from './UserName';
import AlbumNumber from './AlbumNumber';
import Group from './Group';

const Home = () => {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <UserName name="Dawid Zamorowski"/>
        <AlbumNumber number="42449"/>
        <Group/>
    </div>
  );
};

export default Home;