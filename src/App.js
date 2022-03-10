import { Routes, Route, BrowserRouter } from "react-router-dom";

import React, { useState, useEffect, createContext } from 'react';
import MainComponent from './pages/Main';
import StoreComponent from './pages/Store';
import MemberComponent from './pages/Members';
import TransactionComponent from './pages/Transaction';
import ContactComponent from './pages/Contact';
import OrganizeComponent from './pages/Organize';
import { table, minifyRecords } from './lib/airtable';
import Home from './pages/Home';

export const AirtableContext = createContext( {} );

function App() {

  const [ airtableData, setAirtableData ] = useState( {} );

  useEffect( () => {
    table.select( {} ).all().then( async records => {
      const minifiedRecords = await minifyRecords( records );
      airtableData.members = minifiedRecords;
      setAirtableData( airtableData );
    } );
  }, [ airtableData, setAirtableData ] );

  return (
    <AirtableContext.Provider value={ airtableData }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }>
            <Route index element={ <MainComponent/> }/>
            <Route path="store" element={ <StoreComponent/> }>
              <Route path=":nftId" element={ <StoreComponent/> }/>
            </Route>
            <Route path="member" element={ <MemberComponent/> }>
              <Route path=":name" element={ <MemberComponent/> }/>
            </Route>
            <Route path="transaction" element={ <TransactionComponent/> }>
              <Route path=":hash" element={ <TransactionComponent/> }/>
            </Route>
            <Route path="organize" element={ <OrganizeComponent/> }>
              <Route path=":hash" element={ <OrganizeComponent/> }/>
            </Route>
            <Route path="contact" element={ <ContactComponent/> }>
              <Route path=":hash" element={ <ContactComponent/> }/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AirtableContext.Provider>
  );
}

export default App;