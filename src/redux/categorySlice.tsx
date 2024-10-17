import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  { eng: 'all', kor: '전체' },
  { eng: 'rice', kor: '밥' },
  { eng: 'side', kor: '반찬' },
  { eng: 'soup', kor: '국&찌개' },
  { eng: 'dessert', kor: '후식' },
  { eng: 'special', kor: '일품' },
]

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    
  }
})