// (10日の間に20回、タブを残していたら何かする)
console.log( '[+] coupon init 10日間閉じなければクーポンが！！！←なにの' );
const count = { pageMove: 0, initialLoad: new Date().getTime(), show: 0 };
window.addEventListener( "load", () => {
  document.addEventListener( 'visibilitychange', e => {
    count.pageMove++;
    count.currentLoad = new Date().getTime();
    count.timeDiff = count.currentLoad - count.initialLoad;
    if ( count.pageMove % 2 === 0 ) {
      // console.log( count.pageMove / 2, "回目の確認" );
    }
    // console.log( count, e );

    // １時間経過していたら 特別クーポンを出す　←　なにの？
    if ( e.timeStamp > 3600 * 1000 && count.show <= 3600 * 1000 ) {
      count.show = 30 * 1000 + 1;
      alert( '１時間クーポンが登場しました' );
    }
    if ( e.timeStamp > 89600 * 10 * 1000 && count.show <= 89600 * 10 * 1000 ) {
      alert( '２４０時間クーポンが登場しました' );
      count.show = 89600 * 10 * 1000 + 1;
    }
  }, false );
}, false );

