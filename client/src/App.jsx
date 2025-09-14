import React from 'react';
import AuthRegister from './pages/auth/Register';
import AuthLogin from './pages/auth/Login';

const App = () => {
  return (
    <div className="p-4 space-y-4">
      <AuthLogin />
      {/* <AuthRegister /> */}
    </div>
  );}

export default App