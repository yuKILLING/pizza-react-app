export default function CardItem({card, deleteCard}) {
  return (
    <div className="flex justify-between border rounded-lg py-2 px-4 bg-black bg-opacity-10">
      <div className="flex gap-6 items-center">
        <img src="/icons/visa.svg" alt="Visa" className="w-8" />
        <span className="font-bold">{card.card_number}</span>
        <span className="text-primaryBlue font-black">{card.card_owner}</span>
      </div>
      <img src="/icons/trash.svg" alt="Delete icon" className="w-4 cursor-pointer" onClick={()=>{deleteCard(card.card_id)}}/>
    </div>
  );
}
