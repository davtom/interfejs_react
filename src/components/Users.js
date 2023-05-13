import React from 'react';

const Users = () => {
  const users = [
    { id: 1, name: 'Dawid' },
    { id: 2, name: 'Admin' },
    { id: 3, name: 'Root' },
  ];

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;