import {getSearchMeal} from '../../../../requestApi';
import {useState } from 'react';
import { getMeal } from '../../../../redux/actions';
import { useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const styles = {
    search:{
      display:'flex',
      alignItems:'center',  
    },
    input:{
        border:'none',
        outline:'none',
        padding:'15px 28px 15.5px 15px',
        fontSize:'19px',
        fontWeight:'500',
        borderRadius:'5px',
        width:'100%',
        maxWidth:'300px',
    },
    btn:{
        padding:'14.5px 21px',
        borderRadius:'5px',
        borderBottomLeftRadius:'0',
        borderTopLeftRadius:'0',
        position:'relative',
        right:'10px',
        backgroundColor:'rgb(1 159 98)',
    },
   
}



export const Search = ()=>{

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const hadleKey = (event)=>{

        if(event.key === 'Enter'){
            handleSeach();
        }

    }

    const handleSeach = ()=>{

        getSearchMeal(value).then(data=>{
            
            dispatch(getMeal(data.meals));
         }).catch(err=>console.log(err));
    }
       

    return (
        <div style={styles.search}>
            <input 
            id="search" 
            className="input" 
            type="text" 
            style={styles.input} 
            placeholder='Enter name of dish'
            value={value}
            onKeyDown={hadleKey}
            onChange={(event)=>setValue(event.target.value)}
            />

            <Link to={`meals/${value}`} className='link'>
            <Button  variant="contained" style={styles.btn} 
            onClick={()=> value.length && handleSeach()}>
            Search
            </Button>
            </Link>
        </div>
    )
    }