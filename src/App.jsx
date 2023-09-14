import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  const [bookMark, setBookMarks] = useState([])

  const handleBookMarks = bookmark => {
    const isExist = bookMark.find((item) => item.id === bookmark.id)
    if (isExist) {
      alert('already added a carts')
    } else {
      const newBookMarkCard = [...bookMark, bookmark]
      setBookMarks(newBookMarkCard)
    }

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Cards handleBookMarks={handleBookMarks}></Cards>
        <Cart bookMark={bookMark}></Cart>
      </div>
    </>
  )
}

export default App
