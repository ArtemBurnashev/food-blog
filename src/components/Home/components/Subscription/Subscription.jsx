import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const styles= {
    subscription:{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',
        gridAutoColumns:'100%',
        gap:'2rem',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:'2rem', 
        margin:'10px 0',
    },
    subtitle:{
        fontSize:'1.25rem', 
        marginBottom:'70px',
    },
    btn:{
        backgroundColor:'rgb(1 159 98)',
        padding:'10px 5px',
        width:'90%',
    }

}

const Subscription = ()=>{
        return(
           <section className="section">
           <h2 style={styles.title} >Subscribe to daily recipes</h2>
           <div style={styles.subtitle} className="subtitle-subscrip">
               Subscribe to the newsletter to receive new recipes
           </div>
            <Container style={styles.subscription}>
                <div>
                    <TextField fullWidth id="outlined-basic"  label="Name" variant="outlined" />
                </div>
                <div>
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                </div>

                <div><Button variant="contained" size='large' style={styles.btn}>Subscribe</Button></div>
    
            </Container>
           </section> 
          
            )
}
export {Subscription};