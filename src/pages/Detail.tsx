import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { RootState } from '../redux/store'
import { FoodItemType } from '../redux/foodSlice'


const Detail = () => {
  const {itemId} = useParams()
  const foods = useSelector((state: RootState) => state.foods.originalFoodList)
  const foodItem = foods.find(item => item.id === Number(itemId))

  const makeManual = (obj: FoodItemType) => {
    const manual = 
    Object
      .entries(obj)
      .filter(([key, value]) => 
        key.includes('MANUAL') && 
        !key.includes('_IMG') && 
        typeof value === 'string' &&
        value.trim() !== '')
      .sort(([keyA], [keyB]) => {
        const numA = parseInt((keyA.match(/\d+/)?.[0] || ''));
        const numB = parseInt((keyB.match(/\d+/)?.[0] || ''));
        return numA - numB
      })
      .map(([key, value]) => value as string)
      .map(item => item.replace(/^\d+\.\s/, ''))
      .map(item => item.replace(/\n/g, ''))

    return manual
  }
  const makeManualImg = (obj: FoodItemType) => {
    const manual = 
    Object
      .entries(obj)
      .filter(([key, value]) => 
        key.includes('MANUAL_IMG') && 
        typeof value === 'string' && 
        value.trim() !== '')
      .sort(([keyA], [keyB]) => {
        const numA = parseInt(keyA.match(/\d+/)?.[0] || '')
        const numB = parseInt(keyB.match(/\d+/)?.[0] || '')
        return numA - numB
      })
      .map(([key, value]) => value)

    return manual
  }

  const manual = foodItem ? makeManual(foodItem) : []
  const manualImg = foodItem ? makeManualImg(foodItem) : []

  console.log(manualImg)

  
  return (
    <div className="detail">
      <section className="hero">
        <div className="img-box">
          <img src={foodItem?.ATT_FILE_NO_MK} alt="foodItemItem_photo" />
        </div>
        <h2>{foodItem?.RCP_NM}</h2>
        <div className="tags">
          <span className="tag">{foodItem?.RCP_PAT2}</span>
          <span className="tag">{foodItem?.RCP_WAY2}</span>
        </div>
      </section>

      <section className="nutritions">
        <h3>영양정보</h3>
        <div className="nutrition-container">
          <div className="nutrition">
            <div className="circle">{foodItem?.INFO_ENG}</div>
            <h5 className="title">열량</h5>
          </div>
          <div className="nutrition">
            <div className="circle">{foodItem?.INFO_CAR}</div>
            <h5 className="title">탄수화물</h5>
          </div>
          <div className="nutrition">
            <div className="circle">{foodItem?.INFO_PRO}</div>
            <h5 className="title">단백질</h5>
          </div>
          <div className="nutrition">
            <div className="circle">{foodItem?.INFO_FAT}</div>
            <h5 className="title">지방</h5>
          </div>
          <div className="nutrition">
            <div className="circle">{foodItem?.INFO_NA}</div>
            <h5 className="title">나트륨</h5>
          </div>
        </div>
      </section>

      <section className="ingredients">
        <h3>재료정보</h3>
        <div className="text">{foodItem?.RCP_PARTS_DTLS}</div>
      </section>

      <section className="manuals">
        <h3>조리법</h3>
        {manual.map((item, index) => (
          <div key={index} className="manual">
            <div
              className="photo"
              style={{ backgroundImage: `url(${manualImg[index]})` }}
            />
            <div className="text-box">
              <div className="number">{index + 1}</div>
              <div className="text">{item}</div>
            </div>
          </div>
        ))}
      </section>

      <div className="tip" style={foodItem?.RCP_NA_TIP === '' ? {display: 'none'} : {}}>
        <h5 className="title">TIP!</h5>
        <p className="text">{foodItem?.RCP_NA_TIP}</p>
      </div>
    </div>
  )
}

export default Detail