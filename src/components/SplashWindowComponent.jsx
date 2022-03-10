import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';


// const countAtom = atom(0)
// const countryAtom = atom('Japan')
// const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])
// const mangaAtom = atom({ 'Dragon Ball': 1984, 'One Piece': 1997, Naruto: 1999 })

const splashedAtom = atomWithStorage(
  'splashed',
  false, window.sessionStorage
);

const SplashWindowComponent = () => {
  const [ splashed, setSplashed ] = useAtom( splashedAtom );
  useEffect( () => {
    if ( !splashed ) {
      console.log( '[+] Splash init' );
      document.querySelector( '#overWallCoverInner' ).classList.add( 'expand1s' );
      document.querySelector( '#overWallCoverInner' ).style.backgroundColor = '#000';
      setTimeout( () => {
        document.querySelector( '#overWallCoverInner' ).style.width = '100%';
        document.querySelector( '#overWallCoverInner' ).style.border = '0';
        document.querySelector( '#overWallCoverInner' ).style.height = '100%';
        document.querySelector( '#overWallCoverInner img' ).classList.add( 'hide2s' );
        document.querySelector( '#overWallCover' ).classList.add( 'hide2s' );
        // setSplashed( true );
      }, 3000 );
    }
  }, [ setSplashed, splashed ] );

  return (
    <>
      {
        !splashed ?
          <div id="overWallCover">
            <div id="overWallCoverInner">
              <img alt="" src="https://media.discordapp.net/attachments/932636979374477362/943141661255561256/PULSACHAN_alpha.png"/>
              <p className={ "loadingPercentage" }>100%</p>
              <p className={ "splashCreator" }>BPP-Attender authored @De</p>
            </div>
          </div>
          :
          <></>
      }
    </>
  );
};

export default SplashWindowComponent;