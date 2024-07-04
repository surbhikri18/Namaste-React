import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
 
function filterData(searchText, allRestaurants) {
    const filterData = allRestaurants.filter((restaurant) =>
       restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );

    return filterData; 
}

const Body =() =>{
    const [allRestaurants, setAllRestaurants]= useState([]);
    const [searchText, setSearchText]= useState("");
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);

    useEffect(()=>{
        //API Call
       getRestaurants();    
    });

    async function getRestaurants(){
        //use bangalore swiggy data
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json= await data.json();
        console.log(json); 
        //optional chaining
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log("render");

    return (allRestaurants?.length == 0) ? <Shimmer /> :  (
        <>
            <div className="search-container">
                <input
                    type="text" 
                    className="search-input" 
                    placeholder="Search for restaurants and foods" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />
                <button 
                    className="search-btn"
                    onClick={() => {
                        //need to filter the data
                        const data = filterData(searchText, allRestaurants);
                        
                        // update the state - restaurants
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>

            </div>
            <div className="restaurant-list">
                { (filteredRestaurants?.length == 0)? <h1>No result match your filter!!</h1> :
                filteredRestaurants?.map((restaurant) =>{
                    return (
                        <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
                    );
                })}
            </div>
        </>
    )  
}

export default Body;