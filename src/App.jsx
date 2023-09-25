import { useState } from 'react'
import Header from './components/Header'
import News from './components/News';
import MainText from './components/MainText';
import Cards from './components/Cards';
import Sidebar from './components/Sidebar';
// import './App.css'

function App() {

  return (
    <div id="app" className="main-layout">
      <Sidebar />
      <Header />
      <News />
      <MainText />
      <Cards />
    </div>
  )
}

export default App
