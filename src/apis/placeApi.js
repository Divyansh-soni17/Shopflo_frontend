import axios from "axios";

 

export const getAllPlaces = async (currentPage, limit) => {
  const { data } = await axios.get(
    `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=${currentPage}&limit=${limit}`
  );
  return data;
};

export const getPlaceDetail = async (id) => {
  const { data } = await axios.get(
    `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings/${id}`
  );
  return data;
};


