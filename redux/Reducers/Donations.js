import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      name:'Đèn lồng sử dụng năng lượng mặt trời',
      description:
        'Chiếc đèn lồng chạy bằng năng lượng mặt trời, mang đến nguồn ánh sáng bền vững và thân thiện với môi trường cho những người có nhu cầu.',
      image:
        'https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
      donationItemId: 1,
      categoryIds: [1, 2],
      price: '1.34',
    },
    {
      name: 'Bộ đồ dùng học tập',
      description:
        'Bộ dụng cụ học tập thiết yếu như vở, bút chì, tẩy dành cho trẻ em có hoàn cảnh khó khăn nhằm giúp các em thành công trong học tập.',
      image:
        'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 2,
      categoryIds: [1, 3],
      price: '13.08',
    },
    {
      name: 'Áo khoác mùa đông ấm áp',
      description:
        'Một chiếc áo khoác mùa đông ấm áp để bảo vệ con người khỏi cái lạnh và giúp họ giữ ấm trong những tháng mùa đông.',
      image:
        'https://images.unsplash.com/photo-1515434126000-961d90ff09db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 3,
      categoryIds: [ 1, 4],
      price: '11.67',
    },
    {
      name: 'Dụng cụ vệ sinh gia đình',
      description:
        'Các vật dụng vệ sinh gia đình như xà phòng, bọt biển và chất khử trùng nhằm giúp mọi người duy trì môi trường sống trong sạch và lành mạnh.',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 4,
      categoryIds: [1, 5],
      price: '3.66',
    },
    {
      name: 'Laptop cho sinh viên',
      description:
        'Máy tính xách tay dành cho học sinh có hoàn cảnh khó khăn nhằm giúp các em tiếp cận công nghệ và tham gia học tập ảo.',
      image:
        'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 5,
      categoryIds: [6, 3],
      price: '15.76',
    },
    {
      name: 'Trò chơi board',
      description:
        'Trò chơi board game dành cho gia đình và trẻ em cùng chơi và tận hưởng, thúc đẩy sự tương tác và giải trí xã hội.',
      image:
        'https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      donationItemId: 6,
      categoryIds: [7],
      price: '1.40',
    },
    {
      name: 'Bóng rổ',
      description:
        'Bóng rổ cho trẻ em vui chơi và vận động, tăng cường thể lực và rèn luyện thể chất.',
      image:
        'https://images.unsplash.com/photo-1494199505258-5f95387f933c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
      donationItemId: 7,
      categoryIds: [8],
      price: '12.53',
    },
    {
      name: "Sách cho trẻ em",
      description:
        'Sách thiếu nhi nhằm thúc đẩy khả năng đọc viết và khuyến khích niềm yêu thích đọc sách ở trẻ nhỏ.',
      image:
        'https://plus.unsplash.com/premium_photo-1661714264890-002b648f816c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
      donationItemId: 8,
      categoryIds: [1, 9],
      price: '14.81',
    },
    {
      name: 'Bộ dụng cụ vệ sinh',
      description:
        'Bộ dụng cụ vệ sinh gồm những vật dụng thiết yếu như bàn chải đánh răng, kem đánh răng, xà phòng giúp mọi người giữ gìn vệ sinh cá nhân và sức khỏe.',
      image:
        'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80',
      donationItemId: 9,
      categoryIds: [10],
      price: '14.17',
    },
    {
      name: 'Nội thất văn phòng',
      description:
        'Nội thất văn phòng như bàn, ghế và tủ hồ sơ cho các tổ chức phi lợi nhuận nhằm tạo ra một môi trường làm việc hiệu quả và tiện dụng.',
      image:
        'https://images.unsplash.com/photo-1520032525096-7bd04a94b5a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
      donationItemId: 10,
      categoryIds: [11],
      price: '3.17',
    },
    {
      name: 'Dụng cụ điện',
      description:
        'Các dụng cụ điện như máy khoan và máy cưa dành cho những người có nhu cầu hoàn thành các dự án cải tạo và sửa chữa nhà cửa.',
      image:
        'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      donationItemId: 11,
      categoryIds: [1, 12],
      price: '4.68',
    },
    {
      name: 'Vật dụng nghệ thuật',
      description:
        'Các vật dụng nghệ thuật như sơn, cọ, canvas để mọi người thể hiện khả năng sáng tạo và tham gia các hoạt động nghệ thuật.',
      image:
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
      donationItemId: 12,
      categoryIds: [13],
      price: '16.95',
    },
    {
      name: 'Chai nước thân thiện với môi trường',
      description:
        'Chai nước thân thiện với môi trường được làm từ vật liệu có thể tái sử dụng để giảm chất thải và thúc đẩy tính bền vững.',
      image:
        'https://images.unsplash.com/photo-1605274280925-9dd1baacb97b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 13,
      categoryIds: [2],
      price: '18.67',
    },
    {
      name: 'dụng cụ thể thao',
      description:
        'Dụng cụ thể thao như bóng đá và bóng rổ để trẻ vui chơi và vận động, tăng cường thể lực và rèn luyện thể chất.',
      image:
        'https://plus.unsplash.com/premium_photo-1664302183949-0bdc2b38286e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 14,
      categoryIds: [1, 8],
      price: '3.99',
    },
    {
      name: 'Nhạc cụ',
      description:
        'Các nhạc cụ như guitar và keyboard để mọi người học và chơi nhạc.',
      image:
        'https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 15,
      categoryIds: [2],
      price: '18.71',
    },
    {
      name: 'Chăn',
      description:
        'Chăn mang lại sự ấm áp và thoải mái cho những người có nhu cầu, đặc biệt là trong thời tiết lạnh.',
      image:
        'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 16,
      categoryIds: [4],
      price: '7.87',
    },
    {
      name: 'Thức ăn để được lâu',
      description:
        'Thực phẩm để lâu được, chẳng hạn như đồ hộp và gạo, để cung cấp nguồn dinh dưỡng thiết yếu cho những người có nhu cầu.',
      image:
        'https://media.istockphoto.com/id/498405596/photo/please-support-our-food-drive-holiday-canned-food-drive.jpg?s=1024x1024&w=is&k=20&c=i2gDVlGn_hiZ8R1ABwAtT_qpnyPALcyQy_7EE1shQb4=',
      donationItemId: 17,
      categoryIds: [1, 5],
      price: '11.64',
    },
    {
      name: 'Vật dụng sơ cứu',
      description:
        ' Vật dụng sơ cứu, chẳng hạn như băng và khăn lau sát trùng, để giúp mọi người điều trị vết thương nhẹ và duy trì sức khỏe và sự an toàn cơ bản.',
      image:
        'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 18,
      categoryIds: [10],
      price: '11.50',
    },
    {
      name: 'Công cụ làm vườn',
      description:
        'Dụng cụ làm vườn như xẻng và cào để người dân trồng và chăm sóc khu vườn của mình, thúc đẩy khả năng tự cung tự cấp và tính bền vững.',
      image:
        'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 19,
      categoryIds: [2, 12],
      price: '13.40',
    },
    {
      name: 'Sách dành cho mọi lứa tuổi',
      description:
        'Sách dành cho mọi lứa tuổi, thúc đẩy khả năng đọc viết và niềm yêu thích đọc sách.',
      image:
        'https://images.unsplash.com/photo-1530538987395-032d1800fdd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 20,
      categoryIds: [9],
      price: '13.83',
    },
  ],
  selectedDonationId: null,
  selectedDonationInformation: null,
  selectedDonationName:'Đèn lồng sử dụng năng lượng mặt trời'
};

const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    resetDonations: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInformation = state.items.find(
        item => item.donationItemId === action.payload,
      );
    },
    updateSelectedDonationName: (state, action) => {
      state.selectedDonationName = action.payload;
    },
  },
});
export const {resetDonations, updateSelectedDonationId,updateSelectedDonationName} = Donations.actions;
export default Donations.reducer;
