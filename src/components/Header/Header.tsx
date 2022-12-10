import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div>
      <a href='#' target='_blank'>
        <img src={logo} className='logo react' alt='React logo' />
      </a>
    </div>
  );
};

export default Header;
