import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { setCategory } from '../redux/foodSlice'
import { useNavigate } from 'react-router'


const Category = ({page}: {page: number}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const category = useSelector((state: RootState) => state.foods.category)

  const categoryName = [
    { eng: 'all', kor: '전체' },
    { eng: 'rice', kor: '밥' },
    { eng: 'side', kor: '반찬' },
    { eng: 'soup', kor: '국&찌개' },
    { eng: 'dessert', kor: '후식' },
    { eng: 'special', kor: '일품' },
  ]

  return (
    <div className="category">
    <h3>카테고리</h3>
      {
        categoryName.map((item, index) => {
          return (
            <h5
              key={index}
              className={category === item.eng ? 'checked' : ''}
              onClick={() => {
                dispatch(setCategory(item.eng))
                navigate(`/explore/${ item.eng }/${ page }`)
              }}
            >{item.kor}
            </h5>
          )
        })
      }
    </div>
  )
}

export default Category