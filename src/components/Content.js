import { useState, useEffect } from "react";
import { List } from "./List";
import { Sorter } from './Sorter'



export function Content(props) {
  const [data,setData] = useState()
  const [total, setTotal] = useState()
  const [date, setDate] = useState()
  const [darkMode, setDarkMode] = useState(false)
  const [sortBy, setSortBy] = useState("date")
  const [order, setOrder] = useState('des')

  useEffect(() => {
    if (props.listData) {
      setData( sortData(props.listData, sortBy, order ) )
      setTotal(props.listData.length)
    }
    if (props.on) {
      const onDate = props.on.split('-')
      setDate(onDate.reverse().join('/'))
    }
    setDarkMode(props.mode)
  }, [props.listData, props.mode, props.on, order, sortBy ])

  const sortHandler = (evt) => {
    const val = evt.target.value
    setSortBy(val)
  }

  const orderHandler = (evt) => {
    const val = evt.target.value
    setOrder( val )
  }

  const sortData = (arrData, byKey, direction) => {
    console.log(byKey,direction)
    let sortedData = [...arrData]
    if (byKey === "date") {
      sortedData.sort((a, b) => {
        let c = 0
        if( direction ==='des') {
          c = new Date(b.Date).getTime() - new Date(a.Date).getTime()
        }
        else if( direction === 'asc') {
          c = new Date(a.Date).getTime() - new Date(b.Date).getTime()
        }
        return c
      })
    }
    else if (byKey === "venue") {
      sortedData.sort((a, b) => {
        if (direction === 'des') {
          return b.Venue.toLowerCase().localeCompare(a.Venue.toLowerCase())
        }
        else {
          return a.Venue.toLowerCase().localeCompare(b.Venue.toLowerCase())
        }
      })
    }
    else if (byKey === "suburb") {
      sortedData.sort((a, b) => {
        if (direction === 'des') {
          return b.Suburb.toLowerCase().localeCompare(a.Venue.toLowerCase())
        }
        else {
          return a.Suburb.toLowerCase().localeCompare(b.Venue.toLowerCase())
        }
      })
    }
    return sortedData
  }

  return (
    <div className="content container">
      <h3 className={(darkMode) ? "p-0 text-muted p-sm-3" : "p-0 p-sm-3"}>Covid Infection Sites Data NSW</h3>
      <h6 className={(darkMode) ? "p-0 text-light p-sm-3" : "p-0 p-sm-3"}>{total} records updated on {date}</h6>
      <Sorter by={sortBy} changeBy={sortHandler} orderBy={orderHandler} direction={order} mode={darkMode} />
      <List data={data} mode={darkMode}/>
    </div>
  )

}