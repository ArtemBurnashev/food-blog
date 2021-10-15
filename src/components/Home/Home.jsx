import {useEffect} from "react";
import {useDispatch } from "react-redux";
import { getAllCategories} from "../../requestApi";
import {setCategories} from '../../redux/actions';
import { Banner } from "./components/Banner/Banner";
import { Catalog } from "./components/Catalog/Catalog";
import { Subscription } from "./components/Subscription/Subscription";


const Home = ()=>{
    
    const dispatch = useDispatch();

    useEffect(()=>{
            getAllCategories().then(data=>{
                dispatch(setCategories(data.categories));

            }).catch(err=>console.log(err))
            
    }, []);

    return(

        <>
            <Banner/>
            <Catalog/>
            <Subscription/>
        </>
    
    )
}

export {Home};
