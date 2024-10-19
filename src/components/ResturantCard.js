import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    // const {resData} = props;
    const {name, areaName, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } = props?.resData?.info;
    return (
       <div className="res-card" style = {{backgroundColor: "#f0f0f0" }}>
        <img 
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        />
        <h4>{name}</h4>
        <h5>{areaName}</h5>
        <h5>{avgRating}</h5>
        <h5>{sla.slaString}</h5>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{costForTwo}</h5>
       </div> 
    )
}

export default ResturantCard;