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
import axios from 'axios';

export const AirtableContext = createContext( {} );
export const SpreadSheetContext = createContext( {} );

function App() {

  const [ airtableData, setAirtableData ] = useState( {} );
  const [ sheetData, setSheetData ] = useState( {} );

  useEffect( () => {
    table.select( {} ).all().then( async records => {
      const minifiedRecords = await minifyRecords( records );
      airtableData.members = minifiedRecords;
      setAirtableData( airtableData );
    } );
  }, [ airtableData, setAirtableData ] );

  useEffect( () => {
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=iFYj1fCUGC6-vv7-hk7N7SX2Rxx55KVqH9xu83Hp3Bh6DYncvgW7opwQLTEQTifveAg9KtgJAnKrZOOYY83E-d8Fet36mGPLm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJm-9bVgU5_XYH0PPM-LaWgKhleizW24-4KsP1spuY4hSspXsvkzWXz-utb7v5P9IdRNO5Cap-uoKnkp-SZWtQ38vJJvcjLLM9z9Jw9Md8uu&lib=Mx9hv0ZJqejBvM1-inSXbfybYnTjGP0Z0';
    axios.get( url ).then( res => {
      console.log( res );
      setSheetData( res.data );
    } );
  }, [ setSheetData, ] );

  return (
    <SpreadSheetContext.Provider value={ sheetData}>
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
    </SpreadSheetContext.Provider>
  );
}

export default App;