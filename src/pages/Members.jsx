import { useEffect, useState, useContext } from 'react';
import WakuComponent from '../components/wakuComponent';

import { AirtableContext } from '../App';

const Members = () => {

  const airtableData = useContext( AirtableContext );
  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru( "member" );
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
          M.E.M.B.E.R
        </div>
      </aside>

      <div id="particles-js"/>

      <div id={ "main" }>
        <div Style={ "display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;" }>
          {
            airtableData.members ?
              airtableData?.members?.map( (member, index) => {
                return <WakuComponent key={ index } member={ member.fields }/>;
              } )
              :
              <div>Contextのロードを待たないといけない</div>
          }
        </div>
      </div>
    </>
  );
};

export default Members;
