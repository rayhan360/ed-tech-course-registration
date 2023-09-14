 import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  const [bookMark, setBookMarks] = useState([])

  const handleBookMarks = bookmark => {
    const newBookMarkCard = [...bookMark, bookMark]
    setBookMarks(newBookMarkCard)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Cards handleBookMarks={handleBookMarks}></Cards>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
