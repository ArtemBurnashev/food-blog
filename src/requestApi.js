import { API_URL } from "./config";

const getMealById = async (mealId)=>{
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);

    return await response.json();
}

const getAllCategories = async ()=>{
    const response = await fetch(API_URL + 'categories.php');

    return await response.json();
}

const getFilterCategories = async (catName)=>{
    const response = await fetch(API_URL + 'filter.php?c=' + catName);

    return await response.json();
}

const getSearchMeal = async (Meal)=>{
    const response = await fetch(API_URL + 'search.php?s=' + Meal);

    return await response.json();
}
const filterByArea = async (area)=>{
    const response = await fetch(API_URL + 'filter.php?a=' + area);

    return await response.json();
}

export {getMealById, getAllCategories, getFilterCategories, getSearchMeal, filterByArea};