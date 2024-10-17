import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { RootState } from '../redux/store'
import { FoodItemType, FoodListType } from '../redux/foodSlice'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'


const Search = () => {
  const foods = useSelector((state: RootState) => state.foods.originalFoodList)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [searchWord, setSearchWord] = useState<string>('')
  const navigate = useNavigate()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value)
  }
  const emptyValue = () => {
    setSearchWord('')
  }
  const searchFood = (foods: FoodListType) => {
    return foods.filter(food => food.RCP_NM.toLowerCase().includes(searchWord.toLowerCase()))
  }
  let filteredFoods: FoodItemType[] = searchWord === '' ? [] : searchFood(foods)

  // before max-height transition
  const mh_0 = {
    'max-height': '0',
    'transition': 'max-height .3s ease-out'
  }
  // after max-height transition
  const mh_100 = {
    'max-height': '30vh',
    'transition': 'max-height .2s ease-in'
  }


  return (
    <div className="container">
      <div className="search">
        <h1>레시피 빠르게 발견하기</h1>
        <h4>어떤 음식을 찾으시나요?</h4>

        <div className="search-container">
          <div className={`search-bar ${isFocus ? 'show': ''}`}>
            <AiOutlineSearch />
            <div className="input-box">
              <input
                type="text"
                value={searchWord}
                placeholder="Search"
                onChange={handleSearch}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
              />
            </div>
            <AiOutlineClose
              className={isFocus ? "show" : ""}
              onClick={emptyValue}
            />
          </div>
          <div className="contents" style={ filteredFoods.length === 0 ? mh_0 : mh_100 }>
            {filteredFoods.map((food, index) => 
              <div
                className="content"
                key={index}
                onClick={() => navigate(`/explore/detail/${ food.id }`)}
              >{food.RCP_NM}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search