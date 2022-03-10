import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  const [ isShown, setShow ] = useState( false );
  useEffect( () => {
  } );
  const showThanksMember = (ClickEventProps) => {
    console.log( ClickEventProps );
    setShow( !isShown );
    document.querySelector( '.thanksMember' ).classList.toggle( "thanksMemberAffectShown" );
    document.querySelector( '#showThanksMember img' ).classList.toggle( "rotate180" );
  };
  return (
    <>
      <footer>
        <section className="thanksMember">
        </section>
        &emsp;

        <div className="flex">
          <div className="link">
            <Link to="/transaction/">Transaction</Link>
            <Link to="/organize/">Organize</Link>
            <Link to="/contact/">Contact</Link>
          </div>
        </div>
        <button onClick={ (event) => {showThanksMember( event ); } } id="showThanksMember">
          <img src="/assets/svg/arrow_down.svg" width="30" alt=""/>
        </button>
      </footer>

    </>
  );
};

export default FooterComponent;