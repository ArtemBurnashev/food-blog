import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const GoBack = ({goBack})=>{
    const styles ={
        btn:{
            color:'rgb(0, 187, 119)', 
            marginBottom:'12px',
            display:'flex',
            justifyContent:'start',
            alignSelf:'start',
        }
    }

    return(
        <Button variant="text" 
        style={styles.btn}
        onClick={goBack}>
        <ArrowBackIcon style={{marginRight:'3px'}}/>Go back
        </Button>
    );
}


