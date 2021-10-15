import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import Preloader from '../../../Preloader';
import { CategoryList } from './CategoryList';


const Catalog = ()=>{

  const categories = useSelector(state=>state.categories);

    return(
        <section className="section">

          <h2 style={{fontSize:"2rem"}}>Dish recipes</h2>
        <Container style={{minHeight:'400px'}}>

        {!categories.length ? <Preloader/>: <CategoryList/>}

        </Container>
         
        </section>

    );
}

export {Catalog};