import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../appConfig.js';

function AccountList() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState('');
  const [newTransactionAmount, setNewTransactionAmount] = useState(0.0);
  const [transactionResponse, setTransactionResponse] = useState('');

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const url = `${BASE_URL}/accounts`;
      const response = await fetch(url);
      const data = await response.json();
      setAccounts(data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  const deleteAccount = async (accountId) => {
    try {
        const url = `${BASE_URL}/accounts`;
        const response = await fetch(`${url}/${accountId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        setTransactionResponse('Account deleted successfully.');
      } else {
        const error = await response.text();
        setTransactionResponse(`Failed to delete Account: ${error}`);
      }
    } catch (error) {
      console.error('Error adding Account:', error);
    }
    fetchAccounts();
  };

  const depositToAccount = async () => {
    try {
        const url = `${BASE_URL}/accounts`;
        const response = await fetch(`${url}/${selectedAccountId}/deposit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: parseFloat(newTransactionAmount),
      });

      if (response.ok) {
        setNewTransactionAmount('');
        setTransactionResponse('Transaction added successfully.');
      } else {
        const error = await response.text();
        setTransactionResponse(`Failed to add transaction: ${error}`);
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
    fetchAccounts();
  };

  const withdrawFromAccount = async () => {
    try {
      const url = `${BASE_URL}/accounts`;
      const response = await fetch(`${url}/${selectedAccountId}/withdraw`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: parseFloat(newTransactionAmount),
      });

      if (response.ok) {
        setNewTransactionAmount('');
        setTransactionResponse('Transaction added successfully.');
      } else {
        const error = await response.text();
        setTransactionResponse(`Failed to add transaction: ${error}`);
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
    fetchAccounts();
  };

  return (
    <div>
      <h2>Account List</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            Account ID: {account.id}, Balance: {account.balance}
            <button onClick={() => setSelectedAccountId(account.id)}>Add Transaction</button>
            <button onClick={() => deleteAccount(account.id)}>Delete Account</button>
          </li>
        ))}
      </ul>

      {selectedAccountId && (
        <div>
          <h3>Add Transaction for Selected Account</h3>
          <input
            type="number"
            placeholder="Enter transaction amount"
            value={newTransactionAmount}
            onChange={(e) => setNewTransactionAmount(e.target.value)}
          />
          <button onClick={withdrawFromAccount}>Withdraw</button>
          <button onClick={depositToAccount}>Deposit</button>
          <p>{transactionResponse}</p>
        </div>
      )}
    </div>
  );
}

export default AccountList;