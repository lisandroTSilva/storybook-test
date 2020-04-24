import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import PureInboxScreen from './components/InboxScreen';
import store from './lib/redux';

function App() {
  return (
    <Provider store={store}>
      <PureInboxScreen />
    </Provider>
  );
}

export default App;
