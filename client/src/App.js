import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Users from './Pages/Users';

function App() {
  const [user, setUser] = React.useState({});

  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
