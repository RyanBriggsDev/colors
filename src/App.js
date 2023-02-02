import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styled/Global'
import Home from './pages/Home'
import Nav from './components/Nav'
import Error404 from './pages/Error404'

const theme = {
  comps: {
    nav: {
      background: '#000',
      color: '#fff',
    },
    header: {
      background: '#000',
      color: '#fff',
    },
    body: {
      background: '#FAF9F6',
      color: 'black',
    },
    footer: '#0072bb',
    h1: {
      color: 'black',
    },
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <footer>Footer</footer>
      </Router>
    </ThemeProvider>
  )
}

export default App
