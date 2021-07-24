import { useState,useEffect } from 'react';
import {Header} from './components/Header'
import {Content} from './components/Content'
import { Footer } from './components/Footer';
import './App.css';
// data source
const dataURL =
"https://data.nsw.gov.au/data/dataset/0a52e6c1-bc0b-48af-8b45-d791a6d8e289/resource/f3a28eed-8c2a-437b-8ac1-2dab3cf760f9/download/covid-case-locations-20210703-1000.json";



function App() {
  const [data,setData] = useState()
  const [date,setDate] = useState()
  const[ production, setProduction] = useState(false)
  const[ darkMode, setDarkMode] = useState( true )
  const [ userPref, setUserPref] = useState({})

  

  document.title = "NSW COVID Locations"

  useEffect( () => {
    if( !data ) {
      fetch( dataURL )
      .then((res) => res.json() )
      .then( (resJSON) => {
        setData( resJSON.data.monitor)
        setDate( resJSON.date )
      } )
    }
  }, [data])

  useEffect(()=> {
    writePrefs()
  }, [darkMode, userPref])

  const modeHandler = (val) => {
    setDarkMode( val)
    setUserPref( {darkMode: val })
  }

  const writePrefs = () => {
    // test writing cookie for dark mode
    document.cookie = "test=" + JSON.stringify(userPref) + ";"
  }

  return (
    <div className={ (darkMode) ? "App bg-dark" : "App"}>
      <Header 
        name="NSW COVID Locations" 
        production={production} 
        defaultState={darkMode} 
        mode={modeHandler}
      />
      <Content listData={data} mode={darkMode} on={ date }/>
      <Footer copyright="Data sourced from NSW Department of Health" on={ date }/>
    </div>
  );
}

export default App;
