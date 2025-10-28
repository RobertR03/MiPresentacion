import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/contacto" element={<Contact />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  )
}

export default App
