import React, {} from "react"
import Card from "./Card";
import {useSelector} from "react-redux";

function CardList() {
    const cardData = useSelector((state) => state.counter.result)
    return (
       <div>
           {cardData.map(card => {
               return <Card
               id={card.id}
               key={card.id}
               title={card.title}
               author={card.username}
               date={card.date}
               likes={card.likes.length - card.dislikes.length}
               comment={card.comments}
           />})}
       </div>
)
}

export default CardList