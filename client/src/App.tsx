import './App.css';
import React from 'react';
import { Layout } from './components'
import { useGetAllUsers } from './services';

function App() {
  const usersQuery = useGetAllUsers();
  console.log(usersQuery.data);

  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
