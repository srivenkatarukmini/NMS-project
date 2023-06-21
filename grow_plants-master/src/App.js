import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Plants, Error, Contact } from './pages';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup1 from './pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='plants' element={<Plants />} />
        <Route path='login1' element={<Login />} />
        <Route path='logout' element={<Logout/>} />
        <Route path='signup1' element={<Signup1/>}/>
        
        <Route path='*' element={<Error />} />

      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default App;
