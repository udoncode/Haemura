import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import food from "../data";
import { RootState } from "./store";

type Data = {
  RCP_SEQ: string;
  RCP_NM: string;
  RCP_WAY2: string;
  RCP_PAT2: string;
  RCP_PARTS_DTLS: string;
  RCP_NA_TIP: string;
  INFO_WGT: string;
  INFO_ENG: string;
  INFO_CAR: string;
  INFO_PRO: string;
  INFO_FAT: string;
  INFO_NA: string;
  HASH_TAG: string;
  ATT_FILE_NO_MAIN: string;
  ATT_FILE_NO_MK: string;
  MANUAL_IMG01: string;
  MANUAL_IMG02: string;
  MANUAL_IMG03: string;
  MANUAL_IMG04: string;
  MANUAL_IMG05: string;
  MANUAL_IMG06: string;
  MANUAL_IMG07: string;
  MANUAL_IMG08: string;
  MANUAL_IMG09: string;
  MANUAL_IMG10: string;
  MANUAL_IMG11: string;
  MANUAL_IMG12: string;
  MANUAL_IMG13: string;
  MANUAL_IMG14: string;
  MANUAL_IMG15: string;
  MANUAL_IMG16: string;
  MANUAL_IMG17: string;
  MANUAL_IMG18: string;
  MANUAL_IMG19: string;
  MANUAL_IMG20: string;
  MANUAL01: string;
  MANUAL02: string;
  MANUAL03: string;
  MANUAL04: string;
  MANUAL05: string;
  MANUAL06: string;
  MANUAL07: string;
  MANUAL08: string;
  MANUAL09: string;
  MANUAL10: string;
  MANUAL11: string;
  MANUAL12: string;
  MANUAL13: string;
  MANUAL14: string;
  MANUAL15: string;
  MANUAL16: string;
  MANUAL17: string;
  MANUAL18: string;
  MANUAL19: string;
  MANUAL20: string;
}
type Id = { id: number; }
export type FoodItemType = Data & Id
export type FoodListType = FoodItemType[]
type CategoryType = string
type FoodsType = {
  originalFoodList: FoodListType;
  foodList: FoodListType;
  category: CategoryType;
}

const FoodList: FoodListType = food.map((item, index) => ({ ...item, id: index }))
const Foods: FoodsType = {
  originalFoodList: FoodList,
  foodList: FoodList,
  category: 'all',
}

const initialState: FoodsType = Foods

const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    setFoods(state, action:PayloadAction<FoodListType>) {
      state.foodList = action.payload
    },
    setCategory(state, action:PayloadAction<CategoryType>) {
      state.category = action.payload
    },
    // filterFoods(state, action:PayloadAction<CategoryType>) {
    //   switch (action.payload) {
    //     case 'all':
    //       state.foodList = state.originalFoodList
    //       break
    //     case 'rice':
    //       state.foodList = state.originalFoodList.filter(food => food.RCP_PAT2 === '밥')
    //       break
    //     case 'side':
    //       state.foodList = state.originalFoodList.filter(food => food.RCP_PAT2 === '반찬')
    //       break
    //     case 'soup':
    //       state.foodList = state.originalFoodList.filter(food => food.RCP_PAT2 === '국&찌개')
    //       break
    //     case 'dessert':
    //       state.foodList = state.originalFoodList.filter(food => food.RCP_PAT2 === '후식')
    //       break
    //     case 'special':
    //       state.foodList = state.originalFoodList.filter(food => food.RCP_PAT2 === '일품')
    //       break
    //       default:
    //         state.foodList = state.originalFoodList
    //   }
    // }
  }
})

export const { setFoods, setCategory } = foodsSlice.actions
export default foodsSlice.reducer