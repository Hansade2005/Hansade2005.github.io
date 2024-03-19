// App.js
import React from 'react';
import MainNavigation from './MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store'; // update the path to match your file structure
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (__DEV__) {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// BronzeServiceScreen.js
// SilverServiceScreen.js'
// GoldServiceScreen.js
// DiamondServiceScreen.js


