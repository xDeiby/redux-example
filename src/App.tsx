import React from 'react';
import { Provider } from 'react-redux';
import ListUsers from './components/ListUsers';
import store from './store';
// import store from './forms/Redux/store';
// import { addUser, deleteUser } from './forms/Redux/actions/actionUsers';

const App = () => (

  <Provider store= {store}>
      <ListUsers />
  </Provider>
);

export default App;
