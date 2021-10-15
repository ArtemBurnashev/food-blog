import {useParams, useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setMeals} from '../../redux/actions';
import {getFilterCategories} from '../../requestApi';
import Preloader from '../Preloader';
import { MealList } from './MealList';
import { Container } from '@mui/material';
import { GoBack } from '../goBack';

const Category = ()=>{

    const {name} = useParams();
    const {goBack} = useHistory();
    const dispatch = useDispatch();
    const meals = useSelector(state =>state.meals);

    useEffect(() =>{
        getFilterCategories(name).then(data=>{
               dispatch(setMeals(data.meals));
        });
        window.scrollTo(0, 0);
    }, [name]);

    return (

        <section className="section section--category">
            <Container style={{minHeight:'400px'}}>
            <h1 style={{fontSize:"2rem"}}>{name}</h1>
            <GoBack goBack = {goBack}/>
            {!meals.length ? <Preloader/>: <MealList meals={meals}/>}
            </Container>
           
        </section>
    )


}

export {Category};