import React from 'react'
import { Link } from 'react-router-dom'
import { FoodItemType } from '../redux/foodSlice'

const imgBox = {
  display: 'block',
  overflow: 'hidden',
  position: 'relative',
  width: '200px',
  height: '200px'
}
const img = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  transition: 'transform 1.5s'
}
const imghover = {
  transform: 'translate(-50%, -50%) scale(1.2)'
}
const FoodItem = ({ info }: { info: FoodItemType }) => {
  return (
    <li className="foodItem">
      <Link to={`/explore/detail/${info.id}`} className="img-box">
          <img src={ info.ATT_FILE_NO_MK } alt={ info.RCP_NM } />
      </Link>
      <Link to={`/explore/detail/${info.id}`}>
        <h5>{ info.RCP_NM }</h5>
      </Link>
        <p className="sub-info">
          <span className="kcal">{ info.INFO_ENG + 'kcal' }</span> <br />
          <span className="category-tag">{ info.RCP_PAT2 }</span>
        </p>
    </li>
  )
}

export default FoodItem