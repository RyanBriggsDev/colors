function Colors(props) {
  return (
    <div className="color-grid">
        <div className="card">
            <div className="card-content" style={{backgroundColor: 'red'}} onClick={() => {navigator.clipboard.writeText('red')}}><p>red</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: 'red'}} onClick={() => {navigator.clipboard.writeText('red')}}><p>red</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: 'red'}} onClick={() => {navigator.clipboard.writeText('red')}}><p>red</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: 'red'}} onClick={() => {navigator.clipboard.writeText('red')}}><p>red</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: 'red'}} onClick={() => {navigator.clipboard.writeText('red')}}><p>red</p></div>
        </div>
        <div className="card">
            <div className="card-content" style={{backgroundColor: 'red'}} onClick={() => {navigator.clipboard.writeText('red')}}><p>red</p></div>
        </div>
    </div>
  )
}

export default Colors