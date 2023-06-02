import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import UserList from './Components/UserList';
import AccountList from './Components/AccountList';

function App() {
  return (
    <BrowserRouter>
     <nav>
        <ul>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/accounts" element={<AccountList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;