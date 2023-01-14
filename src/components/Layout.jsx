import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routes from '../routers/Routers'
import { BrowserRouter } from 'react-router-dom'
import main from './css/main.css'
import Slider from './Slider'
const Layout = () => {
  return (
    <>
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <div className='main'>
          <Slider/>
          <Routes/>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Layout