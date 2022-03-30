import React from 'react';
import { useNavigate } from 'react-router-dom';

const Food = ({meal}) => {
    // console.log(meal.strMeal);
    let navigate = useNavigate()
    const detailsHandler=()=>{
        navigate('/food/'+meal.idMeal)

    }
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={meal.strMealThumb} alt="" />
        <div className="p-5">
            <a href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{meal.strMeal}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{meal.strInstructions.slice(1,100)}</p>
            <button onClick={detailsHandler}  href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </button>
        </div>
    </div>
    );
};

export default Food;