import { useState,useEffect } from "react"

export function Sorter(props) {
  const [ darkMode, setDarkMode ] = useState(false)

  useEffect(()=>{
    setDarkMode( props.mode )
  },[ props.mode ])

  return (
    <div className="row py-0 py-sm-3 align-items-center">
      <div className="col-3 col-sm-1">
        <p className={(darkMode) ? "my-0 py-0 py-sm-2 text-end text-light" : "my-0 py-0 py-sm-2 text-sm-end text-dark"}>Sort by</p>
      </div>
      <div className="col-9 col-sm-3">
        <div className="btn-group" role="group" aria-label="Sort data by date, suburb or venue">
          <input
            type="radio"
            className="btn-check"
            name="sort" id="date"
            value="date"
            checked={props.by === "date"}
            onChange={props.changeBy}
          />
          <label className="btn btn-outline-primary" htmlFor="date">Date</label>
          <input
            type="radio"
            className="btn-check"
            name="sort"
            id="suburb"
            value="suburb"
            checked={props.by === "suburb"}
            onChange={props.changeBy}
          />
          <label className="btn btn-outline-primary" htmlFor="suburb">Suburb</label>
          <input
            type="radio"
            className="btn-check"
            name="sort"
            id="venue"
            value="venue"
            checked={props.by === "venue"}
            onChange={props.changeBy}
          />
          <label className="btn btn-outline-primary" htmlFor="venue">Venue</label>
        </div>
      </div>
      <div className="col-3 col-sm-2 my-2 my-sm-0">
        <p className={(darkMode) ? "my-0 py-2 text-sm-end text-light" : "my-0 py-2 text-sm-end text-dark"}>Direction</p>
      </div>

      <div className="col-9 col-md-4 my-2 my-sm-0">
        <select
        className="form-select bg-dark text-light"
        aria-label="Select sort direction"
        onChange={ props.orderBy }
        defaultValue={ props.order }
        >
          <option value="des" selected={ props.direction === "des"}>Descending</option>
          <option value="asc" selected={ props.direction === "asc"}>Ascending</option>
        </select>
      </div>
    </div>
  )
}