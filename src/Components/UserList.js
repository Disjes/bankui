import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../appConfig.js';

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [newAccountBalance, setNewAccountBalance] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const url = `${BASE_URL}/users`;
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addAccount = async () => {
    try {
      const url = `${BASE_URL}/accounts`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: selectedUserId, balance: newAccountBalance }),
      });

      if (response.ok) {
        setNewAccountBalance('');
        fetchUsers();
      } else {
        console.error('Failed to add account:', response.status);
      }
    } catch (error) {
      console.error('Error adding account:', error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => setSelectedUserId(user.id)}>Add Account</button>
          </li>
        ))}
      </ul>

      {selectedUserId && (
        <div>
          <h3>Add Account for Selected User</h3>
          <input
            type="number"
            placeholder="Enter balance"
            value={newAccountBalance}
            onChange={(e) => setNewAccountBalance(e.target.value)}
          />
          <button onClick={addAccount}>Add Account</button>
        </div>
      )}
    </div>
  );
}

export default UserList;