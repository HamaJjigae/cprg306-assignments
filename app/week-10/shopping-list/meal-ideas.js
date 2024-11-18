"use client";
import {useEffect, useState} from 'react';

function fetchMealIdeas(ingredient)
{
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
      })
      .then((data) => data.meals)
      .catch((error) => {
        console.error("Error fetching meal ideas:", error);
        return null;
      });
}

function MealIdeas({ ingredient })
{
    const [meals, setMeals] = useState([]);
    function loadMealIdeas()
    {
      fetchMealIdeas(ingredient).then((mealIdeas) => {
        setMeals(mealIdeas || []);
      });
    }

    useEffect(() => {
      if (ingredient) {
        loadMealIdeas();
      }
    }, [ingredient]);

    return (
      <div>
        <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <li key = {meal.idMeal}>
              {meal.strMeal}
            </li>
          ))
        ) : (
          <li> No meal ideas found.</li>
        )}
      </ul>
      </div>
    );
}

export default MealIdeas;
