import axios from 'axios';
import { options } from './constants';

axios.defaults.baseURL = 'https://youtube138.p.rapidapi.com/video';

export const getData = async (url) => {
  const res = await axios.get(url, options);
  return res.data;
};


export const getThemeClasses = (isDarkMode) =>{
  return isDarkMode
    ? "bg-[#01323C] text-[#fff]"
    : "bg-[#fff] text-[#01323C]";
}