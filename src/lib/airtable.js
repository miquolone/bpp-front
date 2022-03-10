const airtable = require( 'airtable' );

const base = new airtable( { apiKey: `keyUatuYQPhRYSJEK` } ).base( `appQOTOWNdmjL5TuL` );
const table = base( `Members` );

const minifyRecords = async (records) => {
  if ( records ) {
    return records.map( (record) => getMinifiedRecord( record ) );
  }
};
const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields
  };
};

export { table, getMinifiedRecord, minifyRecords };
