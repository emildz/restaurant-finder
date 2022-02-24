import React, {useState} from "react";
import { View, Text } from "react-native";
import { Input, Button} from 'react-native-elements';
import App from "../../App"

export default function AddNewRestaurantScreen(){
    const [restaurantName, setRestaurantName] = useState()
    const [address, setAddress] = useState()
    const [photo,setPhoto] = useState()
    const [rating,setRating] = useState()

    const newRestaurant = {
        address:address,
        name: restaurantName,
        numRatings: rating,
        photoUrl: photo,
        rating: rating
    }
    
    
    const newRestaurantInfo = () => {
        fetch("path", {
            method: "POST",
            headers: {
                Accept:'application/json',"Contact-Type":'application/json'
            },
            body: JSON.stringify(newRestaurant)
        })
    } 
      console.log(newRestaurant)

    return (
        <>
        <View>
            <Text> This is add New Restaurant</Text>
            <Input 
            placeHolder="Restaurant Name" 
            spellCheck 
            onChange={(text) => setRestaurantName(text)}/>
            
            <Input placeHolder="Address" 
            onChange={(text) => setAddress(text)}/>
            <Input placeHolder="Photo" onChange={(text) => setPhoto(text)}keyboardType="url"/>
            <Input 
            placeHolder="Rating" onChange={(text) => setRating(text)}
            keyboardAppearance="numeric" 
            maxLength={'1'}
            />
            <Button title='Create new restaurant' onPress={newRestaurantInfo}/>
        </View>
        </>
)
    }