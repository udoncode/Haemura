import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import Category from "../components/Category"
import FoodList from "../components/FoodList"
import { useEffect, useState } from "react"
import { FoodListType, setFoods, setCategory } from "../redux/foodSlice"
import Pagination from "../components/Pagination"
import { useNavigate, useParams } from "react-router"
import { useDispatch } from "react-redux"

const Explore = () => {
  const foods = useSelector((state: RootState) => state.foods.originalFoodList)
  const category = useSelector((state: RootState) => state.foods.category)
  const filterFoods = (category: string, foods: FoodListType) => {
    switch (category) {
      case 'rice':
        return foods.filter(food => food.RCP_PAT2 === '밥')
      case 'side':
        return foods.filter(food => food.RCP_PAT2 === '반찬')
      case 'soup':
        return foods.filter(food => food.RCP_PAT2 === '국&찌개')
      case 'dessert':
        return foods.filter(food => food.RCP_PAT2 === '후식')
      case 'special':
        return foods.filter(food => food.RCP_PAT2 === '일품')
      default:
        return foods
    }
  }

  // Pagination
  const postLimit: number = 12
  const pageLimit: number = 5
  const [page, setPage] = useState<number>(1)
  const offset = (page - 1) * postLimit
  const totalPosts = filterFoods(category, foods).length
  const totalPages = typeof totalPosts === 'number' ? Math.ceil(totalPosts / postLimit) : ''
  const lastPage = Math.ceil(filterFoods(category, foods).length / postLimit)
  

  const {pageId, categoryId} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (categoryId) {
      let isCategory = ['all', 'rice', 'side', 'soup', 'dessert', 'special'].includes(categoryId)
      if (isCategory) {
        dispatch(setCategory(categoryId))
      } else {
        navigate('/explore/all/1')
      }
    }
    setPage(Number(pageId))
    dispatch(setFoods(filterFoods(category, foods)))

    if (isNaN(Number(pageId)) || Number(pageId) < 1 || Number(pageId) > lastPage) {
      setPage(1)
      navigate(`/explore/${category}/${page}`)
    }
  }, [category, page])


  return (
    <div className="explore">
        <Category page={page} />
        <div className="list-container">
          <FoodList
            page={page}
            offset={offset}
            postLimit={postLimit}
          />
          <Pagination
            page={page}
            setPage={setPage}
            pageLimit={pageLimit}
            totalPages={totalPages}
            lastPage={lastPage}
          />
        </div>
    </div>
  )
}

export default Explore