import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Layouts/Header/Header'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Users from './Pages/Users';

function App() {
  const [user, setUser] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    const cachedUser = JSON.parse(localStorage.getItem('user'));
    if (cachedUser) {
      setUser(cachedUser);
    }
  }, []);

  React.useEffect(() => {
    if (Object.keys(user).length !== 0) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  function exit() {
    localStorage.removeItem('user');
    setUser({});
    navigate('/');
  }

  return (
    <div className="App">
      <Header user={user} setUser={setUser} exit={() => exit()} />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/register" element={<Register setUser={setUser} />}/>
        <Route path="/login" element={<Login setUser={setUser} />}/>
      </Routes>
    </div>
  );
}

export default App;
