import {CategoryItem} from './CategoryesItem';
import { useSelector} from 'react-redux';

const CategoryList = ()=>{

   const categories = useSelector(state=>state.categories);

    return(
        <div className="list">
                {categories.map(elem =>{
                   return <CategoryItem key={elem.idCategory} {...elem}/>
                })}
        </div>
        )
}

export {CategoryList};