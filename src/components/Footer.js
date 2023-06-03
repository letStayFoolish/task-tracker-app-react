import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const location = useLocation();
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
      {location.pathname !== '/about' && <Link to='/about'>About</Link>}
    </footer>
  );
};

export default Footer;
