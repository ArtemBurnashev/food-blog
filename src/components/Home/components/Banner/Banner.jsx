import { Intro } from "./Intro";
import { Container } from '@mui/material';
const Banner = ()=>{
    
    return(
       <section className = 'banner'>
        <div className="banner-wrapper">
        <Container>
        <Intro/>
        </Container>
        </div>
            
       </section>

    );
}

export {Banner};