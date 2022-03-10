import { useEffect, useState } from 'react';

const Contact = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru( "contact" );
    window.particleInit();
  }, [] );

  return (
    <>
      <aside className="circleRotateClassWrap">
        <div className={ circleRotateClassName }/>
        <div className="circleRotateClassWrapInnterText">
          <div className="samePlanets">
            <canvas id="myCanvas">&emsp</canvas>
          </div>
          C.O.N.T.A.C.T
        </div>
      </aside>

      <div id="particles-js"/>

      <div id={ 'main' }>
        <section className="activity flex-center mt5">
          <div className={ "p3" }>
            <img src="https://media.discordapp.net/attachments/932636979374477362/943141661255561256/PULSACHAN_alpha.png" width={ "250px" }/>
          </div>
          <div className={ "p3" }>
            <a className="t_w"
               target={ "_blank" } rel={ "noreferrer" }
               href={ 'https://discord.com/channels/895078439709708318/895078442637336628' }>

              Discord でお話しましょう
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
