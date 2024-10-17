import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import FoodItem from './FoodItem'
import { useParams } from 'react-router'

type PropsType = {
  page: number;
  offset: number;
  postLimit: number;
}

const FoodList = ({page, offset, postLimit}: PropsType) => {
  const {pageId, categoryId} = useParams()
  const foodList = useSelector((state: RootState) => state.foods.foodList)
  const category = useSelector((state: RootState) => state.foods.category)

  return (
    <ul className="foodList">
      {
        foodList && Number(pageId) === page && categoryId === category
        ? foodList
          .slice(offset, offset + postLimit)
          .map(food => <FoodItem key={food.id} info={food} />)
        : ''
      }
    </ul>
  )
}

export default FoodList