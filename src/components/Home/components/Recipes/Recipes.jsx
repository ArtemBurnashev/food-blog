import { Container } from '@mui/material';
import Preloader from "../../../Preloader";
import { CategoryList } from './CategoryList';
const Recipes = ({categories=[]})=>{

    return(
        <section className="section">
          <h2 style={{fontSize:"2rem"}}>Dish recipes</h2>
        <Container>

        {!categories.length ? <Preloader/>: <CategoryList  categories = {categories}/>}

        </Container>
         
        </section>

    );
}

export {Recipes};