import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Error404 from './pages/Error404'

import Nav from './components/Nav'

function App() {
  return (
    <Router>
        <div className="layout">
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/404' element={<Error404 />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App