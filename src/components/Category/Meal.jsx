import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'; 
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Meal(props) {
    const {strMeal, strMealThumb, idMeal} = props;

    const styles= {
      link:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        height: '100%',
        textAlign:'center'
}
    }
  return (
    <Card sx={{ maxWidth: 345, padding:1 }}>
    <Link to={`/meal/${idMeal}`} className="link" style={styles.link}>
        <CardMedia
          component="img"
          height="200"
          image={strMealThumb}
          alt={strMeal}
          style={{objectFit: 'contain'}}
        />
        <CardContent>
          <Typography className = "description" 
          gutterBottom component="div"  
          style={{fontSize: '1.13rem', fontWeight:'500'}}>
           {strMeal.slice(0, 20)}...
          </Typography>
        </CardContent>
     <Button variant="text" size="large" style={{color:'rgb(0, 187, 119)'}}>Read more 
       <ArrowForwardIcon style={{marginLeft:'3px'}}/></Button>
    </Link>
    
    </Card>
  );
}
