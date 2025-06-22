
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Service from './Pages/Service/Service'
import ContactPage from './Pages/ContactPage/ContactPage'
import HelpPage from './Pages/HelpPage/HelpPage'

function App() {

  return (
    <>
      <BrowserRouter>

        {/* navbar  */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/help' element={<HelpPage />} />
        </Routes>

        {/* footer  */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
