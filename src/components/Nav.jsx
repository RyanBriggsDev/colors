import { useNavigate } from 'react-router-dom'

function Nav() {
  const n = useNavigate()

  return (
    <nav>
      <p onClick={() => n('/')} className="pointer">
        Home
      </p>
      <a target="_blank" href="https://ryanbriggs.dev" rel="noreferrer">
        Portfolio
      </a>
    </nav>
  )
}

export default Nav
