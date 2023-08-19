import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { RiShakeHandsFill } from 'react-icons/ri';
import { MdSubscriptions } from 'react-icons/md';
import { BsFileEarmarkPlayFill, BsTrophy } from 'react-icons/bs';
import { IoTimerSharp} from'react-icons/io5';
import { MdLocalFireDepartment } from 'react-icons/md';
import { ImFeed} from 'react-icons/im';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { BsNewspaper } from 'react-icons/bs';
import { FaHeartbeat } from "react-icons/fa";
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';
import { BsChevronBarUp } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

// Kategoriler 
export const categories = [
  { 
    name: 'Anasayfa', 
    icon: <AiFillHome />, 
    type: 'home',
  },
  { 
    name: 'Shorts', 
    icon: <RiShakeHandsFill/>, 
    type: 'menu', 
  },
  { 
    name: 'Abonelikler', 
    icon: <MdSubscriptions />, 
    type: 'menu',

    divider: true, 
  },
  { 
    name: 'Kitaplık', 
    icon: <BsFileEarmarkPlayFill />, 
    type: 'menu', 
  },
  { 
    name: 'Geçmiş', 
    icon: <IoTimerSharp />, 
    type: 'menu',
    divider: true, 
  },
  { 
    name: 'Keşfet', 
    type: 'menu',
  },
  {
    name: 'Trendler',
    icon: <MdLocalFireDepartment />,
    type: 'category',
  },
  {
    name: 'Müzik',
    icon: <CgMusicNote />,
    type: 'category',
  },
  { 
    name: 'Canlı', 
    icon: <ImFeed/>, 
    type: 'category',
  },
  { 
    name: 'Filmler', 
    icon: <FiFilm />, 
    type: 'category', 
  },
  {
    name: 'Oyun',
    icon: <IoGameControllerSharp />,
    type: 'category',
  },
  {
    name: 'Haberler',
    icon: <BsNewspaper />,
    type: 'category',
  },
  {
    name: 'Spor',
    icon: <BsTrophy />,
    type: 'category',
  },
  {
    name: 'Eğitici',
    icon: <RiLightbulbLine />,
    type: 'category',
  },
  {
    name: 'Güzellik',
    icon: <FaHeartbeat />,
    type: 'category',
    divider: true,
  },
  {
    name: 'Oturum aç',
    icon: <BiUserCircle />,
    type: 'menu',
    divider: true,
  },

  { 
    name: 'Ayarlar', 
    icon: <FiSettings />, 
    type: 'menu', 
  },
  {
    name: 'İçerik bildirme',
    icon: <AiOutlineFlag />,
    type: 'menu',
  },
  { 
    name: 'Yardım', 
    icon: <FiHelpCircle />, 
    type: 'menu', 
  },
  {
    name: 'Geri bildirim',
    icon: <RiFeedbackLine />,
    type: 'menu',
    divider: true,
  },
  { 
    name: " Hakkında Basın Telif hakkı Bize ulaşın İçerik",
    type: 'menu',
    divider: true,
  },
  {
    name: ' Şartlar Gizlilik Politika ve Güvenlik',
    type: 'menu',
    divider: true,
  },
  {
    name: '© 2023 Google LLC',
    type: 'menu',

  }
];

export const options = {
  params: {
    hl: 'tr',
    gl: 'TR',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY ,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

