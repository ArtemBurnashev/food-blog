import { Search } from "./Search";

const Intro = ()=>{
    const styles = {
        intro:{
            maxWidth: '450px',
            color: '#fff',
            fontSize:'1.1rem',
        },
        label:{
            display:'block',
            marginBottom:'7px',
            fontWeight:'100',
        },
    
    }
    return (
        <div style={styles.intro}>
        
            <h1 style={{fontSize:'2.1rem'}}>Delicious recipes for every day</h1>
            <div style={{marginBottom:'50px'}}>
            <p className="par-vis">On our site you will find delicious, available and interesting home cooking recipes.  Can't you cook?  Don't be upset.  It is very easy to fix this, just  more often visit us and you will not only learn, but also love to cook!</p>
            <p className="par">The most important secret of a delicious dish are good mood and confidence that you will succeed!  Love what you do!  Love to cook!  Cook with joy and you will succeed!</p>
            </div>
            <label htmlFor = "search" style={styles.label}>
                Quick search for a dish
            </label>
            <Search/>
         
        </div>
    );
}

export {Intro};