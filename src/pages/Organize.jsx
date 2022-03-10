import { useEffect, useState } from 'react';

const OrganizeComponent = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru( "organize" );
    window.particleInit();
  }, [] );

  return (
    <>
      <aside className="circleRotateClassWrap">
        <div className={ circleRotateClassName }/>
        <span className={ "runrunrunrunrunrunrunrunrun" }/>
        <div className="circleRotateClassWrapInnterText">
          <div className="samePlanets">
            <canvas id="myCanvas">&emsp</canvas>
          </div>
          O.R.G.A.N.I.Z.E
        </div>
      </aside>

      <div id="particles-js"/>

      <div id={ "main" }>
        <section className="activity">
          <div className="flex-center">
            <p className={ "message" }>■▲■▲■▲■▲■▲■▲■▲■▲</p>
          </div>
          <div className="flex-center">
            <p className={ "message" }>BPPは〜〜〜〜〜どんなとこ？について記載する</p>
          </div>
          <div className="flex-center">
            <p className={ "message" }>■▲■▲■▲■▲■▲■▲■▲■▲</p>
          </div>
        </section>
        <br/>
        <section className="activity">
          <div className="flex-center">
            <p className={ "message" }>■▲■▲■▲■▲■▲■▲■▲■▲</p>
          </div>
          <div className="flex-center">
            <p className={ "message" }>BPPは〜〜〜〜〜どんな団体？</p>
          </div>
          <div className="flex-center">
            <p className={ "message" }>■▲■▲■▲■▲■▲■▲■▲■▲</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OrganizeComponent;
