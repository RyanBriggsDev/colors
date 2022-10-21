function Colors(props) {
  return (
    <div className="color-grid">
        <div className="card">
            <div className="card-content" style={{backgroundColor: props.color1}} onClick={() => {navigator.clipboard.writeText(props.color1)}}><p>{props.color1}</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: props.color2}} onClick={() => {navigator.clipboard.writeText(props.color2)}}><p>{props.color2}</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: props.color3}} onClick={() => {navigator.clipboard.writeText(props.color3)}}><p>{props.color3}</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: props.color4}} onClick={() => {navigator.clipboard.writeText(props.color4)}}><p>{props.color4}</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: props.color5}} onClick={() => {navigator.clipboard.writeText(props.color5)}}><p>{props.color5}</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: props.color6}} onClick={() => {navigator.clipboard.writeText(props.color6)}}><p>{props.color6}</p></div>
        </div>
    </div>
  )
}

export default Colors

Colors.defaultProps = {
    color1: 'rgb(13, 58, 92)',
    color2: 'rgb(0, 89, 149)',
    color3: '#000',
    color4: '#f2f2f2',
    color5: '#6e6e6e',
    color6: '#303030',
}