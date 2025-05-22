import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      categoryId: 1,
      name: 'Điểm nổi bật',
    },
    {
      categoryId: 2,
      name: 'Môi trường',
    },
    {
      categoryId: 3,
      name: 'Học tập',
    },
    {
      categoryId: 4,
      name: 'Quần áo và phụ kiện',
    },
    {
      categoryId: 5,
      name: 'Hàng gia dụng',
    },
    {
      categoryId: 6,
      name: 'Điện tử',
    },
    {
      categoryId: 7,
      name: 'Đồ chơi và game',
    },
    {
      categoryId: 8,
      name: 'thiết bị thể thao',
    },
    {
      categoryId: 9,
      name: 'sách và phương tiện truyền thông',
    },
    {
      categoryId: 10,
      name: 'sức khỏe và mỹ phẩm',
    },
    {
      categoryId: 11,
      name: 'Văn phòng phẩm',
    },
    {
      categoryId: 12,
      name: 'công cụ và phần cứng',
    },
    {
      categoryId: 13,
      name: 'mĩ thuạt và thủ công',
    },
  ],
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;

export default Categories.reducer;
