import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Error404 from './pages/Error404'

import Nav from './components/Nav'
import Blue from './pages/Blue'
import Yellow from './pages/Yellow'
import Green from './pages/Green'
import Lilac from './pages/Lilac'
import Red from './pages/Red'
import Orange from './pages/Orange'

function App() {
  return (
    <Router>
        <div className="layout">
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/blue' element={<Blue />} />
                <Route path='/yellow' element={<Yellow />} />
                <Route path='/green' element={<Green />} />
                <Route path='/lilac' element={<Lilac />} />
                <Route path='/red' element={<Red />} />
                <Route path='/orange' element={<Orange />} />
                <Route path='/404' element={<Error404 />} />
                <Route path='/*' element={<Error404 />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App