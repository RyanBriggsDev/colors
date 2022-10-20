import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  return (
    <div className="page-layout">
      <h1>Home</h1>
      <div className="home-grid">
        <div className="pointer blue w-100 h-100 center" onClick={() => navigate('/blue')}>blue</div>
        <div className="pointer yellow w-100 h-100 center" onClick={() => navigate('/yellow')}>yellow</div>
        <div className="pointer green w-100 h-100 center" onClick={() => navigate('/green')}>green</div>
        <div className="pointer lilac w-100 h-100 center" onClick={() => navigate('/lilac')}>lilac</div>
        <div className="pointer red w-100 h-100 center" onClick={() => navigate('/red')}>red</div>
        <div className="pointer orange w-100 h-100 center" onClick={() => navigate('/orange')}>orange</div>
      </div>
    </div>
  )
}

export default Home