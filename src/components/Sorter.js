export function Sorter(props) {
  return (
    <div className="d-flex justify-content-end py-2 align-items-center">
      <p className="my-0 me-4">Sort by</p>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="sort" id="date" />
        <label className="btn btn-outline-primary" htmlFor="date">Date</label>
        <input type="radio" className="btn-check" name="sort" id="suburb" />
        <label className="btn btn-outline-primary" htmlFor="suburb">Suburb</label>
        <input type="radio" className="btn-check" name="sort" id="venue" />
        <label className="btn btn-outline-primary" htmlFor="venue">Venue</label>
      </div>
      <p className="my-0 mx-4">Direction</p>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="checkbox" className="btn-check" name="btnradio" id="btnradio1" checked />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">Descending</label>
      </div>
    </div>
  )
}