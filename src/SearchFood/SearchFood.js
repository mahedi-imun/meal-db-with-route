
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const SearchFood = () => {
    const [inputValue, setInputValue] = useState('')
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [inputValue])
    const searchFood = (e) => {
        setInputValue(e.target.value);

    }

    return (
        <div className='w-4/5 mx-auto'>
            <div className='mt-5 '>
                <input onChange={searchFood} type="text" id="email-adress-icon" className="block p-2 pl-10 w-3/5 mx-auto text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <div>
                <h3 className=' text-purple-600 text-3xl my-6'>Your search results:{foods.length}</h3>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    {
                        foods.map(food => <Food
                            key={food.idMeal}
                            meal={food}
                        ></Food>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchFood;