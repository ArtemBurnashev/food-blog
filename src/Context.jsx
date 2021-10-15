import { createContext } from "react";

export const MyContext = createContext();
const CustomContext = (props)=>{
  const inc = (a)=>a+1;
  const dec = (a)=>a-1;
  const del = (a)=>a/2;
  const mult = (a)=>a*2;
 function reducer(state, action){
  const {a} = state;
  
   switch(action.type){
      case'+':
      return {
        ...state,
        a:inc(a),
      }
      case'-':
      return {
        ...state,
        a:dec(a),
      }
      case'/':
      return {
        ...state,
        a:del(a),
      }
      case'*':
      return {
        ...state,
        a:mult(a),
      }
      default:
     return state;
   }
   
   
}
    return (<MyContext.Provider value = {{reducer}}> 
        {props.children};
    </MyContext.Provider>)
}

export default CustomContext;