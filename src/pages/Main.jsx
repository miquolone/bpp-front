import { useEffect, useContext, useState } from 'react';
import YouTube from 'react-youtube';
import { SpreadSheetContext } from '../App';


const Main = () => {

  const sheetData = useContext( SpreadSheetContext );

  const [ newRelease, setNewRelease ] = useState( [] );

  useEffect( () => {
    setNewRelease( sheetData.newreleases );
    console.log( "newRelease:", sheetData.newreleases );
  }, [ sheetData ] );

  useEffect( () => {
    const date = new Date();
    date.setMonth( date.getMonth() + 1 );
    date.setDate( 0 );

    document.querySelectorAll( [ '.wallUpper', '.wallUnder' ] ).forEach( wall => {
      setTimeout( () => {
        wall.classList.add( 'hide' );
      }, Math.LOG10E * Math.random() * date.getDate().toString() * Math.random( 200 ) * 200 );
    } );

    window.particleInit();

    /// Youtubeわく専用 動画はpip で表示する
    function intersectionCallback(entries) {
      entries.forEach( entry => {

        if ( !entry.isIntersecting ) {
          document.querySelector( '#backgroundYoutubePlayer' )?.classList.add( 'backgroundYoutubePlayerScrolled' );
        } else {
          document.querySelector( '#backgroundYoutubePlayer' )?.classList.remove( 'backgroundYoutubePlayerScrolled' );
        }
      } );
    }

    new IntersectionObserver( intersectionCallback, {
      threshold: [ 0, 0.01, 1.0 ], rootMargin: '0% 0px'
    } ).observe( document.querySelector( "header" ) );
  }, [] );

  const VIDEOID = "86ysdmDYVzw";

  const opts = {
    playerVars: {
      playsinline: 1,
      loop: 1,
      rel: 0,
      seekTo: 0,
      start: 0,
      end: 64,
      controls: 0
    }
  };

  function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
  }

  function onPlayerHandle(event) {
    if ( event.target.getPlayerState() === 0 ) {
      event.target.mute();
      event.target.playVideo();
    }
  }

  return (
    <>
      <div>
        <div id="backgroundYoutubePlayer">&emsp;
          <YouTube
            videoId={ VIDEOID }
            id={ 'backgroundYoutubePlayer' }
            // containerClassName={ string }
            opts={ opts }
            onReady={ onPlayerReady }
            // onPlay={ () => {console.log( 'playing' );} }
            // onPause={ () => {console.log( 'pause' );} }
            onEnd={ onPlayerHandle }
            onStateChange={ onPlayerReady }
          />
        </div>
        <div id="youtubeWrap">
          <div id="youtubeWrapR">
            {/*<div className="wallUpper">&emsp;</div>*/ }
            {/*<div className="wallUnder">&emsp;</div>*/ }
          </div>
          <div id="youtubeWrapL">
            {/*<div className="wallUpper">&emsp;</div>*/ }
            {/*<div className="wallUnder">&emsp;</div>*/ }
          </div>
        </div>
      </div>

      <header>&emsp;
        <div id="particles-js"/>
      </header>

      <div className={ "smallSizeMobileOnlyContent" }>

      </div>

      <div id={ "main_home" } className="mt4 pt0">
        {
          newRelease ?
            newRelease.map( v => {
              console.log( v );
              return (
                <>
                  <section className="activity">
                    <h2>{ v[ 1 ] }</h2>
                    <div className={ "p2" }>
                      <div className="message">
                        { v[ 2 ] }
                      </div>
                    </div>
                  </section>
                </>
              );
            } )
            : <></>
        }
      </div>
    </>
  );
};

export default Main;