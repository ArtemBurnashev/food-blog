import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";
import {MealList} from '../Category/MealList';
import { Container } from "@mui/material";
import { GoBack } from "../goBack";

export const SearchResult = ()=>{

    const searchResult = useSelector(state=>state.meal || []);
    const {goBack} = useHistory();

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    return(
      <section className = 'section section--search'>
        <Container style={{textAlign:'start'}} className="recipe-container">
     
    
     <h1
     
     style={{
          fontSize:'1.8rem',
          marginBottom:'0',
      }}>Result of your search</h1>

        {searchResult.length ? <>

            <MealList meals = {searchResult}/>
        
        </> : 
        <div
        style={{
            fontSize:'23px',
            marginBottom:'10px',
        }}>
            Unfortunately this dish is not in the catalog...
        </div>}
        <GoBack goBack = {goBack} />
    
        </Container>
           
      </section>
    )
}