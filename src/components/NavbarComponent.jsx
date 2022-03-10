import { Link } from 'react-router-dom';

const NavbarComponent = () => {

  return (
    <>
      <nav className="flex">
        <a href={ "/" }> <img className="logo_img" src="/assets/images/bpp_150_alpha.png" alt={ "" }/> </a>
        <div className={ "link" }>
          <Link to={ "/" }> HOME </Link>
          <Link to={ "/STORE" }> STORE </Link>
          <Link to={ "/MEMBER" }> MEMBER </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;