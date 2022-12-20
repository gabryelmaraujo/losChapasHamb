import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './globalStyles';
import AppRoutes from './routes';



function App() {
  return (
    <div className='App'>
      <GlobalStyles/>
      <ToastContainer autoClose={1500} closeOnClick theme="dark"/>
      <AppRoutes />
    </div>
  );
}

export default App;
