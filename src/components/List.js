import { ListItem } from "./ListItem"
import { Spinner } from "./Spinner"

export function List(props) {
  if (!props.data) {
    return (
      <div
        className={(props.mode) ? "content container d-flex justify-content-center align-items-center bg-dark text-light" : "content container d-flex justify-content-center align-items-center"}
      >
        <div className="list-empty text-center text-muted" style={{ minHeight: '100%' }}>
          <Spinner width={48} />
        </div>
      </div>
    )
  }
  else {
    const Items = props.data.map((item, key) => {
      return (
        <ListItem
          key={key}
          venue={item.Venue}
          date={item.Date}
          address={item.Address}
          suburb={item.Suburb}
          time={item.Time}
          mode={props.mode}
        />
      )
    })

    return (
      <div className="list">
        {Items}
      </div>
    )
  }
}