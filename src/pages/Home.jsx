import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="page-layout">
      <h1>Home</h1>
      <div className="home-grid">
        <div className="pointer blue w-100 h-100 center" onClick={() => navigate('/blue')}>
          Blue
        </div>
        <div className="pointer yellow w-100 h-100 center" onClick={() => navigate('/yellow')}>
          Yellow
        </div>
        <div className="pointer green w-100 h-100 center" onClick={() => navigate('/green')}>
          Green
        </div>
        <div className="pointer lilac w-100 h-100 center" onClick={() => navigate('/lilac')}>
          Lilac
        </div>
        <div className="pointer red w-100 h-100 center" onClick={() => navigate('/red')}>
          Red
        </div>
        <div className="pointer orange w-100 h-100 center" onClick={() => navigate('/orange')}>
          Orange
        </div>
      </div>
    </div>
  )
}

export default Home
