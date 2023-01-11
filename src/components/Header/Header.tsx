import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/'>
        <img src={logo} className='logo react' alt='React logo' />
      </Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/sign-in'>Sign In</Link>
    </div>
  );
};

export default Header;
