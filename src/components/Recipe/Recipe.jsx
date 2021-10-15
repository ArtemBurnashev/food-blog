import { useEffect, useState} from "react";
import { useHistory } from 'react-router';
import {useParams} from 'react-router-dom';
import { getMealById } from "../../requestApi";
import {Container} from '@mui/material';
import Preloader from '../Preloader';
import { RecipeContent } from "./RecipeContent";
import { GoBack } from "../goBack";

const Recipe = ()=>{

    const {idMeal} = useParams();
    const [recipe, setRecipe] = useState([]);
    const {goBack} = useHistory();


    useEffect(()=>{
        getMealById(idMeal).then(data=>setRecipe(data.meals[0]));
        window.scrollTo(0, 0);

    }, [idMeal])
    
  

    return(
            <section className="section" style={{paddingTop:'70px'}}>
                <h1 style={{fontSize:'2rem', paddingBottom:'30px'}}>Recipe</h1>

                <Container className='recipe-container'>
                    {!recipe.idMeal ? <Preloader/> : <RecipeContent recipe={recipe}/>}
                    <GoBack goBack={goBack}/>
                </Container>


            </section>
        );


}
export {Recipe};