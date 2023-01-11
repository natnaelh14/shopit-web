import Header from './components/Header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Shop from '../pages/shop';
import Contact from '../pages/contact';
import SignIn from '../pages/sign-in';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
