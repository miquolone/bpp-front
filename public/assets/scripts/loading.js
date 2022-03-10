window.addEventListener( "load", () => {
  let count = 0;
  const target = document.querySelector( '.loadingPercentage' );
  if ( target ) {
    window.nnn = setInterval( () => {
      target.innerHTML = count + "%";
      if ( ++count > 100 ) {
        clearInterval( window.nnn );
      }
    }, 1 );
  }
} );