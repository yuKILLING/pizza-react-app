import { useEffect } from "react";
import CardItem from "./CardItem";

export default function CardList({ userCards, loading, deleteCard }) {
  return (
    <div className="flex flex-col justify-center gap-3 my-4">
      {loading ? (
        <img
          src="/icons/loading.svg"
          alt="Loading"
          className="self-center w-10"
        />
      ) : (
        <>
          {!userCards ? (
            <span className="font-bold text-xl self-center">Нет добавленных карт.</span>
          ) : (
            userCards.map((card) => <CardItem key={card.card_id} card={card} deleteCard={deleteCard}/>)
          )}
        </>
      )}
    </div>
  );
}
