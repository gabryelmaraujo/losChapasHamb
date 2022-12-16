import React from 'react';
import GlobalStyles from './globalStyles';
import logo from './logo.svg';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainPage';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <div className='App'>
      <GlobalStyles/>

      {/* <HomePage/> */}

      {/* <LoginPage/> */}

      {/* <RegisterPage /> */}

      <MainPage/>

    </div>
  );
}

export default App;
