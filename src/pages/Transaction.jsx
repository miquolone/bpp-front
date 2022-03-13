import { useEffect, useState, useContext } from 'react';
import { SpreadSheetContext } from '../App';

const Transaction = () => {

  const sheetData = useContext( SpreadSheetContext );
  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  const [ donates, setDonates ] = useState( [] );

  useEffect( () => {
    setDonates( sheetData.donates );
    console.log( "donate:", sheetData.donates );
  }, [ sheetData ] );

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
            {
              donates ?
                donates.map( v => {
                  console.log( v );
                  return (
                    <>
                      <ul>
                        <ol>
                          From: { v[ 2 ] }
                        </ol>
                        <ol>
                          To: { v[ 3 ] }
                        </ol>
                        <ol>
                          <a target="_blank" rel="noreferrer" href={ v[ 4 ] }>EthScan（外部サイト）</a>
                        </ol>
                      </ul>
                    </>
                  );
                } )
                : <></>
            }
          </div>
        </section>
      </div>
    </>
  );
};

export default Transaction;
