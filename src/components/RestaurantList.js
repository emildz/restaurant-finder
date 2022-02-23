import React, { useEffect, useState } from "react"; 
import { Text, View, ScrollView } from 'react-native';
import RestaurantCard from "./RestaurantCard";

function RestaurantList(){
    const [restaurants, setRestaurants] = useState()
    useEffect(() => {
        
        fetch('https://bocacode-intranet-api.web.app/restaurants')
            .then(response => response.json())
            .then(data => setRestaurants(data))
            .catch(err => alert(err))
    }, [])
    return (
        
    <View>
    
    {!restaurants
        ? <Text>Loading...</Text>
        : <ScrollView>{restaurants.map(restaurant => {
            return <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
        })}</ScrollView>
    }
    </View>
    )
}
    


export default RestaurantList