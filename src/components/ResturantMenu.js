
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  const { resId } = useParams()

  const resInfo = useResturantMenu(resId);
  
  if(resInfo === null) return <Shimmer />

  const {name ,avgRating, totalRatingsString, costForTwoMessage, locality, city, cuisines  } = resInfo?.cards[2]?.card?.card?.info;
  // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.title);

  const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{`${avgRating} (${totalRatingsString}) : ${costForTwoMessage}`}</p>
      <p>
        {`${locality}  ${city}`}
      </p>
      <p>{cuisines.join(", ")}</p>
      <h2>Menu</h2>
      <ul>
        { itemCards.map(item=> (
            <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100} --- {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCount})</li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
