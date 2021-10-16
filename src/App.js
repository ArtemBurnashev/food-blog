import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './components/Components.css';
import {Home} from './components/Home/Home'
import {Header} from "./components/Header/Header";
import { Category } from './components/Category/Category';
import {Footer} from './components/Footer/Footer';
import {Recipe} from './components/Recipe/Recipe';
import { SearchResult } from './components/SeachResult/Seachresult';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { AreaCategory } from './components/areaCategory/AreaCategory';
import { NotFound } from './components/NotFound';
import { Blog } from './components/Blog/Blog';
import LogIn  from './components/LogIn';


const  App = ()=>{
  
  return(
    <>
     <Router basename = "/food-blog">
      <Provider store={store}>
      <Header/>
       <main className="content">
       <Switch>
         <Route  exact path = '/' component={Home}/>
         <Route path = '/category/:name' component={Category}/>
         <Route path = '/meal/:idMeal' component={Recipe}/>
         <Route path = '/meals/:name' component={SearchResult}/>
         <Route path  = '/area/:area' component = {AreaCategory}/>
         <Route path = '/login' component = {LogIn}/>
         <Route path = '/blog' component = {Blog}/>
         <Route component = {NotFound}/>
       </Switch>
       </main>
      
       <Footer/>
      </Provider>

     </Router>

    </> 
  );
}

export default App;
