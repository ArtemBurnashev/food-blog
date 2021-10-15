import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { getArea } from "../../redux/actions";
import { MealList } from "../Category/MealList";
import { Container } from "@mui/material";
import { filterByArea } from "../../requestApi";
import { GoBack } from "../goBack";

const AreaCategory  = ()=>{

    const {area} = useParams();
    const {goBack} = useHistory();
    const dispatch = useDispatch();
    const filterArea = useSelector(state=>state.filterArea);

    useEffect(()=>{

        filterByArea(area).then((data)=>{
            
            dispatch(getArea(data.meals));
            
        });

        window.scrollTo(0, 0);


    }, [area]);
   


return(
    <section className="section" style={{paddingTop:'70px'}}>
    <h2>{area}</h2>

        <Container >
        <GoBack goBack = {goBack}/>
        <MealList meals = {filterArea}/>
         
        </Container>

    </section>
);

}

export {AreaCategory};