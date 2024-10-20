import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams()
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
    const json = await data.json();

    // console.log(data?.card[2]?.card?.card?.info) //name id city
    // console.log(data?.card[2]?.card?.card)
    console.log(json.data);
    setResInfo(json.data);
  };

  if(resInfo === null) return <Shimmer />

  const {name ,avgRating, totalRatingsString, costForTwoMessage, locality, city, cuisines  } = resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.title);

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
