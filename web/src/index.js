import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
// On ajoute nos composants
import Error from './components/Error'
import { ThemeProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
