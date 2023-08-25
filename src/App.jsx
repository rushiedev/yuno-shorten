import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Home from './pages/Home'
import None from './pages/None'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home header={<Header />} footer={<Footer />} />} />
          <Route path='*' element={<None />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
