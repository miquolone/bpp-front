import { useMemo, useContext } from 'react';
import { SpreadSheetContext } from '../App';

const OpenSeaCharacter = () => {

  const sheetData = useContext( SpreadSheetContext );

  const memo = useMemo( () => {

    return (
      <section className="activity">
        <h2>CELESTIALS</h2>
        <div className="activity_contents">
          {
            sheetData.celestials?.map( (v) => {
              try {
                const url = new URL( v[ 2 ] );
                const patternResolve = url.pathname.match( new RegExp( /.*assets\/ethereum\/(0x.*?)\/(.*)/ ) );
                if ( patternResolve ) {
                  const [ , contractAddress, tokenId ] = patternResolve;
                  return (
                    <div key={ tokenId }>
                      <nft-card vertical contractAddress={ contractAddress } tokenId={ tokenId }/>
                    </div>
                  );
                } else {
                  return ( <></> );
                }
              } catch ( e ) {
                console.log( v );
              }
            } )
          }
        </div>
      </section>
    );
  }, [ sheetData ] );
  return ( memo );
};
export default OpenSeaCharacter;
