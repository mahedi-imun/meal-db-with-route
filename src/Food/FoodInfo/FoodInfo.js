
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodInfo = () => {
    const { foodId } = useParams();
    const [meal, setMeal] = useState({})
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [foodId])
    console.log(meal);
    return (
        <div>
            <a href="/" className=" mt-10 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg pl-1" src={meal.strMealThumb} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {meal.strMeal}</h5>
                    <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">category: {meal.strCategory}</h6>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{meal.strInstructions?.slice(1,150)}</p>
                </div>
            </a>
        </div>
    );
};

export default FoodInfo;