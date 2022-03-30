
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodInfo = () => {
    const {foodId} = useParams();
    const [meal , setMeal] = useState({})
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]) )
    },[foodId])
    console.log(meal);
    return (
        <div>
            <h4>food id: {foodId}</h4>
            <h1>{meal.strMeal}</h1>
        </div>
    );
};

export default FoodInfo;