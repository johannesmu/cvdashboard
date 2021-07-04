import { useState, useEffect } from "react"
export function Footer ( props ) {
  const[ date, setDate ] = useState()
  useEffect(() => {
    if( props.on !== undefined ) {
      const onDate = props.on.split('-')
      setDate(onDate.reverse().join('/'))
    }
  }, [ props.on ])
  return(
    <footer className="main-footer bg-dark" style={{padding: '1em'}}>
      <div className="container-fluid">
        <p className="text-center text-light" style={{margin: 0}}>
          { props.copyright } 
        </p>
        <p className="text-center text-light" style={{display: (date) ? "block" : "none"}}>
          Updated on { date}
        </p>
      </div>
    </footer>
  )
}