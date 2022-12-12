import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Layouts/Header/Header'
import Form from './Components/Form/Form';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Users from './Pages/Users';

function App() {
  const [user, setUser] = React.useState({});
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const cachedUser = JSON.parse(localStorage.getItem('user'));
    if (cachedUser) {
      setUser(cachedUser);
    }

    setOpenLogin(JSON.parse(localStorage.getItem('openLogin')) || false);
    setOpenRegister(JSON.parse(localStorage.getItem('openRegister')) || false);
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
      <Header user={user} 
              setUser={setUser} 
              setOpenLogin={() => {
                setOpenLogin(true);
                localStorage.setItem('openLogin', 'true');
              }} 
              setOpenRegister={() => {
                setOpenRegister(true);
                localStorage.setItem('openRegister', 'true');
              }}
              exit={() => exit()} />

      {openLogin && <Form close={() => {
                                  setOpenLogin(false);
                                  localStorage.removeItem('openLogin');
                                }}>
                      <Login close={() => {
                                  setOpenLogin(false);
                                  localStorage.removeItem('openLogin');
                                }}
                              setUser={setUser} />
                    </Form>}

      {openRegister && <Form close={() => {
                                setOpenRegister(false);
                                localStorage.removeItem('openRegister');
                              }}>
                          <Register close={() => {
                                      setOpenRegister(false);
                                      localStorage.removeItem('openRegister');
                                    }}
                                    setUser={setUser}/>
                        </Form>}

      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />}/>
        <Route path="/users" element={<Users />}/>
      </Routes>
    </div>
  );
}

export default App;
