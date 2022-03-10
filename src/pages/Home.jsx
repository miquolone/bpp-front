import { Outlet } from "react-router-dom";
import FooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';
import SplashWindowComponent from '../components/SplashWindowComponent';

const Home = () => {

  return (
    <>
      <SplashWindowComponent/>

      <NavbarComponent/>

      <Outlet/>

      <FooterComponent/>
    </>
  );
};

export default Home;
