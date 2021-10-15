import { ActionTypes } from './action-types';



export const setCategories = (data)=>{
    return {
        type:ActionTypes.SET_CATEGORIES,
        payload:data,
    }
}

export const setMeals = (meals)=>{

    return{
        type:ActionTypes.SET_MEALS,
        payload:meals,
    }
}

export const getMeal = (meal)=>{
    return{
        type:ActionTypes.GET_MEAL,
        payload:meal,
    }

}

export const getArea = (area)=>{

    return{
        type:ActionTypes.GET_AREA,
        payload:area,
    }

}

