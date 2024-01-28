import  {Header}  from './components/Header'
import { Footer } from './components/Footer'
import Home from './components/Home'
import {Route, Routes} from "react-router-dom"
import './assets/css/styles.css'
import About from './components/About'

function App() {


  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
