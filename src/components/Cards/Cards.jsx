import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = ({handleBookMarks}) => {
    const [allCards, setAllCards] = useState([])

    

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCards(data))
    },[])
    return (
        <div className="flex-1 grid grid-cols-1 gap-2 lg:grid-cols-3 mt-8 mb-4">
            {
                allCards.map(item => <Card key={item.id} card={item} handleBookMarks={handleBookMarks}></Card>)
            }
        </div>
    );
};


export default Cards;