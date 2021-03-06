import '../styles/Header.css'
import {useState} from 'react'

const Toggle = (props) => {
  return (
    <div className="btn-group ms-2 order-2 order-sm-5" role="group" aria-label="Toggle dark mode">
      <input 
        type="checkbox" 
        className="btn-check" 
        id="dark-mode" name="mode" 
        onClick={props.handler} 
        value="true" 
        checked={ props.mode }
      />
      <label className="btn btn-outline-success" htmlFor="dark-mode">Dark mode {(props.mode) ? "on" : "off"}</label>
    </div>
  )
}

export function Header(props) {
  const[darkMode,setDarkMode] = useState(props.defaultState)

  const clickHandler = (evt) => {
    if( darkMode === true ) {
      setDarkMode( false )
      props.mode( false )
    }
    else{
      setDarkMode( true )
      props.mode( true )
    }
  }
  return (
    <header className="navbar navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <span className="navbar-brand order-0 order-sm-0">{props.name}</span>
        <form className="d-flex flex-fill order-4 order-sm-1 my-2 my-sm-0">
          <input className="form-control me-0 me-sm-2" type="search" placeholder={(props.production) ? "Search" : "Search is not yet functional"} aria-label="Search" />
          <button className="btn btn-outline-light d-none d-md-inline-block" type="submit">Search</button>
        </form>
        <Toggle defaultState={false} handler={clickHandler} mode={darkMode}/>
      </div>
    </header>
  )
}