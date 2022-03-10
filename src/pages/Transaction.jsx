import { useEffect, useState } from 'react';

const Transaction = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru( "transaction" );
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
          T.R.A.N.S.A.C.T
        </div>
      </aside>

      <div id="particles-js"/>

      <div id={ "main" }>
        <section className="activity">
          <div className="flex-center">
            <ul>
              <ol>
                From: 0x966767c24782dda01b3c22fc60c83ca1d3a356a2
              </ol>
              <ol>
                To: 0x9de8991c56f622175274fb358f981af6f903a799
              </ol>
              <ol>
                <a target="_blank" rel="noreferrer"
                   href="https://etherscan.io/tx/0x68bce054b5e4ac72ce8ec2c96120792ed8a911204e8c0ee32785bc6b1956827c">EthScan（外部サイト）</a>
              </ol>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Transaction;
