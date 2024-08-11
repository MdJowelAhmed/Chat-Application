import React from 'react';
// import { Button } from './components/ui/button';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Chat from './pages/Chat/Chat';
import Profile from './pages/Profile/Profile';
import { useAppStore } from './store/store';


const privateRoute=({children})=>{
  const {userInfo}=useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? children : <Navigate to="/auth"/>
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;