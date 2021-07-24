export function ListItem( props ) {
  return(
    <div className={(props.mode) ? "card mb-4 bg-secondary text-light" : "card mb-4"}>
      <div className="row card-body">
        <h5 className="col-12">{props.venue}</h5>
        <h6 className="col">{props.address}</h6>
        <div className="col">{props.suburb}</div>
        <div className="col fw-bold">{props.date}</div>
        <div className="col">{props.time}</div>
      </div>
    </div>
  )
}