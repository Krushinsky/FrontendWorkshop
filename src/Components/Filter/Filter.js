import { useSelector, useDispatch } from 'react-redux'
import { getSelectedCategory, filterCategory } from '../../redux/itemsSlice'

const Filter = ({category}) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div className='ServiceFilter' >
        <p onClick={()=> {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}> {category}</p>   
            
        </div>
    )
}

export default Filter;