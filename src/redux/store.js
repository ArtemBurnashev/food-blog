import { createStore } from "redux"; 
import { ActionTypes } from "./action-types";
const initialState={
        categories:[],
        meals:[],
        meal:[],
        filterArea:[],
}

const reducer  = (state = initialState, {type, payload})=>{
    
    switch(type) {
        case ActionTypes.SET_CATEGORIES:
            return{
            ...state,
            categories:payload,
        }
        case ActionTypes.SET_MEALS:{
            return{
                ...state,
                meals:payload,
                
            }
        }
        case ActionTypes.GET_MEAL:{
            return{
                ...state,
                meal:payload,
                
            }
        }
        case ActionTypes.GET_AREA:{

            return{
                ...state,
                filterArea:payload,
            }
        }
        default:
        return state;

    }
}

const store = createStore(reducer);

export {store};