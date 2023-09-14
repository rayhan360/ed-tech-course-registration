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
  const [totalPrice, setTotalPrice] = useState(0)
 
  const handleBookMarks = bookmark => {
    const isExist = bookMark.find((item) => item.id === bookmark.id)

    let creditHour = bookmark.credit_hour;
    let price = bookmark.price

    if (isExist) {
      toast('already added this course')
    } else {
        bookMark.forEach(item => {
          creditHour = creditHour + item.credit_hour;
          price = price + item.price;
        })


        const remaining = 20 - creditHour;
        if(creditHour > 20){
          toast.error('you cannot more than 20 credits courses')
        }else{
          setCreditHour(creditHour)
          setRemainingCredit(remaining)
          setTotalPrice(price)
  
        const newBookMarkCard = [...bookMark, bookmark]
        setBookMarks(newBookMarkCard)
        }

       
    }

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Cards handleBookMarks={handleBookMarks}></Cards>
        <Cart bookMark={bookMark} creditHour={crediHour} remainingCredit={remainingCredit} totalPrice={totalPrice}></Cart>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
