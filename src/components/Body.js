import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react"; // whenver a state variable updates, react re renders the component -- super powerfull variable -- hooks
import react from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(()=> {
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    //console.log(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    //data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    setListOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return (
    <div><h2>Oop's!! Something went wrong </h2><h3>Please check your internet connection</h3></div>
  )
  }

   return listOfResturants.length === 0 ? (<Shimmer />) :(
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box"></input>
            <button>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturants(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <Link key={resturant.info.id} to={`/resturant/${resturant.info.id}`}><ResturantCard resData={resturant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;


// [
//     {
//       id: "16866",
//       name: "Pizza Hut",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/ff4610b0-18c6-4353-8437-ac5af51ecfa6_16866.jpg",
//       locality: "Sector 3",
//       areaName: "Rohini",
//       costForTwo: "₹350 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 4.2,
//     },
//     {
//       id: "603438",
//       name: "Chinese Wok",
//       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
//       locality: "Sector 7",
//       areaName: "Rohini",
//       costForTwo: "₹250 for two",
//       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
//       avgRating: 4.3,
//     },
//     {
//       id: "622616",
//       name: "Domino's Pizza",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/13/d18f0582-c96b-4794-8ce8-fe272b707c00_622616.JPG",
//       locality: "3rd Sector",
//       areaName: "Rohini",
//       costForTwo: "₹400 for two",
//       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
//       avgRating: 4.5,
//     },
//     {
//       id: "498382",
//       name: "Burger King",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/64339639-9425-4d7a-807f-6fca82056ec3_498382.jpg",
//       locality: "M2K Mall",
//       areaName: "Rohini",
//       costForTwo: "₹350 for two",
//       cuisines: ["Burgers", "American"],
//       avgRating: 4.5,
//     },
//   ]
