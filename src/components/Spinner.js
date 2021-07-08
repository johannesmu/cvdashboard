import SpinnerImage from '../assets/Spinner.png'
import '../styles/Spinner.css'
export function Spinner (props) {
  return (
    <div className="spinner" >
      <img src={ SpinnerImage } style={{width: props.width + 'px'}} />
      <p className="text-muted">Getting data ...</p>
    </div>
  )
}