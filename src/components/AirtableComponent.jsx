// 実験に使う
// サンプルテスト用

import { table, minifyRecords } from '../lib/airtable';
import { useEffect, useState } from 'react';

const AirtableComponent = () => {

  const [ data, setData ] = useState( [] );
  useEffect( () => {
    table.select( {} ).all().then( async records => {
      const minifiedRecords = await minifyRecords( records );
      setData( minifiedRecords );
    } );
  }, [ setData ] );

  return (
    <p>
      { JSON.stringify( data, "", 1 ) }
    </p>
  );
};

export default AirtableComponent;
