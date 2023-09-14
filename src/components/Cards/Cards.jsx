import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [allCards, setAllCards] = useState([])

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCards(data))
    },[])
    return (
        <div className="flex-1 grid grid-cols-1 gap-2 lg:grid-cols-3 mt-8">
            {
                allCards.map(item => <Card key={item.id} card={item}></Card>)
            }
        </div>
    );
};

export default Cards;