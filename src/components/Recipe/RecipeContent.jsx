
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Ingredients } from './Ingredients';

 const RecipeContent = ({recipe={}})=>{

    const styles={
        recipeWrapper:{
            display:"flex",
            flexWrap:'wrap',
            gap:'3rem',
            textAlign:'start',
        },
        title:{
            fontSize:'1.8rem',
            marginTop:'0'
        },
        image:{
            width:'320px',
        },
        instructions:{
            fontSize:'1.1rem'
        },
        name:{
            display:'flex',
            alignItems:'center',
            fontSize:'1.07rem',
            fontWeight:'500',
            marginTop:'15px',
        }
    }

    
    return(
        <>

        <div style={styles.recipeWrapper}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} style={styles.image}/>
           <div className='recipe-title'> 
            <h2 style={styles.title}>
                {recipe.strMeal}
            </h2>
            {recipe.strCategory ? <div style={styles.name}> 
            <ArrowRightIcon fontSize='large' 
            style={{color:'rgb(0, 187, 119)'}}/> 
            Category:<Link to={`/category/${recipe.strCategory}`} 
            className = 'link-ctg'>
            {recipe.strCategory}</Link></div> : null}

            {recipe.strArea ? <div style={styles.name}> 
            <ArrowRightIcon fontSize='large' 
            style={{color:'rgb(0, 187, 119)'}}/> 
            Area:
            <Link to={`/area/${recipe.strArea}`} 
            className = 'link-ctg'> {recipe.strArea}
            </Link>
            </div> : null}

            </div>
        </div>
       <div>
       <h2>Instruction</h2>
        <p style={styles.instructions}>{recipe.strInstructions}</p>
       </div> 
        <Ingredients recipe={recipe}/>
        {recipe.strYoutube? (
            <Box>
                <h2>Video Recipe</h2>
                <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={recipe.idMeal}></iframe>
            </Box>
        )
        :null
        
        }

        </>
        )

 }

 export {RecipeContent};