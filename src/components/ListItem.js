export function ListItem( props ) {
  return(
    <div className={(props.mode) ? "card mb-4 bg-secondary text-light" : "card mb-4"}>
      <div className="row card-body">
        <h4 className="col-12">{props.venue}</h4>
        <h6 className="col-12">{props.address}, {props.suburb}</h6>
        <div className="col">{props.date}</div>
        <div className="col">{props.time}</div>
        <div className="col">{props.suburb}</div>
      </div>
    </div>
  )
}