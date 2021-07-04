import { useState, useEffect } from "react";
import { ListItem } from "./ListItem";
import {Sorter} from './Sorter'



export function Content(props) {
  const [data, setData] = useState()
  const [total, setTotal] = useState()
  const[ date, setDate ] = useState()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (props.listData) {
      setData(props.listData)
      setTotal(props.listData.length)
    }
    if ( props.on ) {
      const onDate = props.on.split('-')
      setDate(onDate.reverse().join('/'))
    }
    setDarkMode(props.mode)
  }, [props.listData, props.mode, props.on ])

  const sortData = ( arr, param, dir ) => {

  }

  if (!data) {
    return (
      <div
        className={(darkMode) ? "content container d-flex justify-content-center align-items-center bg-dark text-light" : "content container d-flex justify-content-center align-items-center"}
      >
        <h3 className="list-empty text-center text-muted">Getting data...</h3>
      </div>
    )
  }
  else {
    const sorted = data
    sorted.sort((a, b) => {
      return new Date(b.Date).getTime() - new Date(a.Date).getTime()
    })
    const Items = sorted.map((item, key) => {
      return (
        <ListItem
          key={key}
          venue={item.Venue}
          date={item.Date}
          address={item.Address}
          suburb={item.Suburb}
          time={item.Time}
          mode={darkMode}
        />
      )
    })
    return (
      <div className="content container">
        <h3 className={(darkMode) ? "p-3 text-muted" : "p-3"}>Covid Infection Sites Data NSW</h3>
        <h6 className={(darkMode) ? "p-3 text-light" : "p-3"}>{total} records updated on {date}</h6>
        <Sorter />
        {Items}
      </div>
    )
  }
}