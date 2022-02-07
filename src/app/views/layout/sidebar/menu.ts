import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'المستخدمين',
    icon: 'users',
    link: '/invoices/all',
  },
  {
    label: 'الاقسام',
    icon: 'tag',
    link: '/invoices/setions',
  },
  {
    label: 'الفئات',
    icon: 'list',
    link: '/invoices/categories',
  },
  {
    label: 'الكروت',
    icon: 'credit-card',
    link: '/cards/allcards',
  },
  {
    label: 'الكروت المباعة',
    icon: 'dollar-sign',
    link: '/cards/cardsSelling',
  },
  {
    label: 'الحركات',
    icon: 'align-justify',
    link: '/cards/movements',
  },
  {
    label: 'السلايدر',
    icon: 'image',
    link: '/cards/slider',
  },
  {
    label: 'ارسال اشعارات',
    icon: 'bell',
    link: '/cards/sendNotifications',
  },
 
];
