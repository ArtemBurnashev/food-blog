import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export function CategoryItem(props) {

    const {strCategory, strCategoryThumb, strCategoryDescription} = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
    <Link to={`/category/${strCategory}`} className="link">
    <CardActionArea className="card">
        <CardMedia
          component="img"
          height="220"
          image={strCategoryThumb}
          alt={strCategory}
          style={{objectFit: 'contain'}}
        />
        <CardContent style={{flex:'1'}}>
          <Typography gutterBottom variant="h5" component="div">
           {strCategory}
          </Typography>
          <Typography className = "description" color="text.secondary" style={{fontSize:'1.06rem'}}>
           {strCategoryDescription.slice(0, 45)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Link>
     
    </Card>
  );
}
