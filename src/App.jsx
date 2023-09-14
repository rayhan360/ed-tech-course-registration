import { useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [bookMark, setBookMarks] = useState([])
  const [crediHour, setCreditHour] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(20)

  const handleBookMarks = bookmark => {
    const isExist = bookMark.find((item) => item.id === bookmark.id)

    let creditHour = bookmark.credit_hour;

    if (isExist) {
      toast('already added this course')
    } else {
        bookMark.forEach(item => {
          creditHour = creditHour + item.credit_hour;
        })

        const remaining = 20 - creditHour;

        setCreditHour(creditHour)
        setRemainingCredit(remaining)

      const newBookMarkCard = [...bookMark, bookmark]
      setBookMarks(newBookMarkCard)
    }

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Cards handleBookMarks={handleBookMarks}></Cards>
        <Cart bookMark={bookMark} creditHour={crediHour} remainingCredit={remainingCredit}></Cart>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
