import React from 'react';
import GlobalStyles from './globalStyles';
import logo from './logo.svg';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <div className='App'>
      <GlobalStyles/>

      {/* <HomePage/> */}

      <LoginPage/>

    </div>
  );
}

export default App;
