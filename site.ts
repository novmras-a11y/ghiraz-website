export const site = {
  name: 'غراز | قهوة ومحمصة',
  description: 'قهوة ومحمصة غراز — تفاصيل من القهوة، ولحظات تستحق التذوق.',
  // أدخل رقم واتساب الرسمي بصيغة دولية دون + (مثال: 9665XXXXXXXX)
  whatsapp: '',
  instagram: '',
  tiktok: '',
  snapchat: '',
  x: '',
  maps: '',
  email: '',
};
export const whatsappLink = (item?: string) => site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(item ? `مرحباً، أرغب بالاستفسار عن ${item} من غراز.` : 'مرحباً، أرغب بالاستفسار عن منتجات غراز.')}`
  : '/contact';
export const categories = [
  {slug:'coffee', title:'القهوة والمشروبات', desc:'تجارب دافئة وباردة بمذاق يستحق العودة.', image:'01_drinks.webp'},
  {slug:'desserts', title:'الحلويات', desc:'تفاصيل حلوة ترافق كل رشفة.', image:'07_desserts.webp'},
  {slug:'space', title:'أجواء غراز', desc:'مساحة تصنع من اللحظة ذكرى.', image:'04_interior.webp'},
];
export const gallery = [
  {file:'01_drinks.webp', category:'coffee'}, {file:'02_drinks.webp',category:'coffee'}, {file:'03_drinks.webp',category:'coffee'},
  {file:'07_desserts.webp',category:'desserts'}, {file:'08_desserts.webp',category:'desserts'}, {file:'09_desserts.webp',category:'desserts'},
  {file:'10_drinks.webp',category:'coffee'}, {file:'11_drinks.webp',category:'coffee'}, {file:'12_drinks.webp',category:'coffee'},
  {file:'18_desserts.webp',category:'desserts'}, {file:'19_desserts.webp',category:'desserts'}, {file:'20_desserts.webp',category:'desserts'},
  {file:'24_drinks.webp',category:'coffee'}, {file:'26_drinks.webp',category:'coffee'}, {file:'28_drinks.webp',category:'coffee'},
  {file:'29_drinks.webp',category:'coffee'}, {file:'30_drinks.webp',category:'coffee'},
  {file:'04_interior.webp',category:'space'}, {file:'05_interior.webp',category:'space'}, {file:'06_interior.webp',category:'space'},
  {file:'13_interior.webp',category:'space'}, {file:'14_interior.webp',category:'space'}, {file:'16_interior.webp',category:'space'},
  {file:'17_interior.webp',category:'space'}, {file:'21_interior.webp',category:'space'}, {file:'22_interior.webp',category:'space'},
  {file:'23_interior.webp',category:'space'}, {file:'25_interior.webp',category:'space'}, {file:'27_interior.webp',category:'space'},
];
