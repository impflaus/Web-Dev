import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Lenovo Legion 5 15ACH6 15.6" / 16GB / SSD 1TB',
    description: 'Игровой ноутбук с мощным процессором Ryzen и видеокартой RTX. Отлично подходит для игр и тяжёлых задач.',
    price: 699990,
    rating: 4.8,
    image: 'assets/images/l1_1.jpg',
    images: ['assets/images/l1_1.jpg', 'assets/images/l1_2.jpg', 'assets/images/l1_3.jpg', 'assets/images/l1_4.jpg'],
    link: 'https://kaspi.kz/shop/p/lenovo-legion-5-15ach6-113140518/',
    categoryId: 1
  },
  {
    id: 2,
    name: 'Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
    description: 'Лёгкий и мощный ноутбук с чипом Apple M3. Отличный выбор для учёбы и разработки.',
    price: 524000,
    rating: 4.9,
    image: 'assets/images/l2_1.jpg',
    images: ['assets/images/l2_1.jpg', 'assets/images/l2_2.jpg', 'assets/images/l2_3.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
    categoryId: 1
  },
  {
    id: 3,
    name: 'Ноутбук ASUS ROG Strix G16 16" / 16 Гб / SSD 1024 Гб',
    description: 'Производительный игровой ноутбук с высокой частотой обновления экрана.',
    price: 1239990,
    rating: 4.7,
    image: 'assets/images/l3_1.jpg',
    images: ['assets/images/l3_1.jpg', 'assets/images/l3_2.jpg'],
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1024-gb-bez-os-90nr0nj7-m001j0-139735259/?c=750000000',
    categoryId: 1
  },
  {
    id: 4,
    name: 'Ноутбук HP Pavilion 15.6" / 16 Гб / SSD 1024 Гб',
    description: 'Универсальный ноутбук для работы, учёбы и повседневных задач.',
    price: 459900,
    rating: 4.6,
    image: 'assets/images/l4_1.jpg',
    images: ['assets/images/l4_1.jpg'],
    link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-1024-gb-win-11-home-15-eh3000ci-7p437ea-118476602/?c=750000000',
    categoryId: 1
  },
  {
    id: 5,
    name: 'Acer Aspire 5 15.6" / 16GB / SSD 512GB',
    description: 'Надёжный ноутбук для офиса и дома с хорошей производительностью.',
    price: 349998,
    rating: 4.5,
    image: 'assets/images/l5_1.jpeg',
    images: ['assets/images/l5_1.jpeg', 'assets/images/l5_2.jpeg', 'assets/images/l5_3.jpeg', 'assets/images/l5_4.jpeg'],
    link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-16-gb-ssd-512-gb-win-11-a315-58-nx-adder-01e-106485059/?c=750000000',
    categoryId: 1
  },
  {
    id: 6,
    name: 'Ноутбук DELL XPS 13 9345 13.4" / 16 Гб / SSD 512 Гб',
    description: 'Премиальный ультрабук с тонким корпусом и отличным дисплеем.',
    price: 1347143,
    rating: 0,
    image: 'assets/images/l6_1.jpeg',
    images: ['assets/images/l6_1.jpeg', 'assets/images/l6_2.jpeg', 'assets/images/l6_3.jpeg'],
    link: 'https://kaspi.kz/shop/p/dell-xps-13-9345-13-4-16-gb-ssd-512-gb-win-11-210-bmtr-140113298/?c=750000000',
    categoryId: 1
  },
  {
    id: 7,
    name: 'Lenovo IdeaPad 3 15.6" / 8GB / SSD 512GB',
    description: 'Бюджетный ноутбук для учёбы и базовых задач.',
    price: 173842,
    rating: 4.4,
    image: 'assets/images/l7_1.jpg',
    images: ['assets/images/l7_1.jpg', 'assets/images/l7_2.jpg', 'assets/images/l7_3.jpg', 'assets/images/l7_4.jpg', 'assets/images/l7_5.jpg'],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
    categoryId: 1
  },
  {
    id: 8,
    name: 'Ноутбук MSI Katana 15 HX B14WFK-812XKZ 15.6" / 16 Гб / SSD 1000 Гб',
    description: 'Игровой ноутбук с мощной графикой и быстрым SSD.',
    price: 899200,
    rating: 4.7,
    image: 'assets/images/l8_1.jpg',
    images: ['assets/images/l8_1.jpg', 'assets/images/l8_2.jpg', 'assets/images/l8_3.jpg'],
    link: 'https://kaspi.kz/shop/p/msi-katana-15-hx-b14wfk-812xkz-15-6-16-gb-ssd-1000-gb-bez-os-9s7-1587c1-812-148280816/?c=750000000',
    categoryId: 1
  },
  {
    id: 9,
    name: 'Huawei MateBook D 16 MitchellF-W5611 Core i5 12450H 16GB / SSD 1TB',
    description: 'Стильный и производительный ноутбук с большим экраном.',
    price: 454990,
    rating: 4.6,
    image: 'assets/images/l9_1.jpeg',
    images: ['assets/images/l9_1.jpeg', 'assets/images/l9_2.jpeg', 'assets/images/l9_3.jpeg'],
    link: 'https://kaspi.kz/shop/p/huawei-matebook-d-16-mitchellf-w5611-core-i5-12450h-16gb-ssd-1tb-uhd-graphics-win-11-16-16-gb-ssd-1024-gb-win-11-53013yjf-132850402/?c=750000000',
    categoryId: 1
  },
  {
    id: 10,
    name: 'ULTRON SMART N100 15.6" / 16GB / SSD 512GB',
    description: 'Ноутбук для учёбы и работы. Большой экран и хорошая производительность.',
    price: 390000,
    rating: 4.5,
    image: 'assets/images/l10_1.jpeg',
    images: ['assets/images/l10_1.jpeg', 'assets/images/l10_2.jpg', 'assets/images/l10_3.jpg', 'assets/images/l10_4.jpg'],
    link: 'https://kaspi.kz/shop/p/ultron-smart-n100-15-6-16-gb-ssd-512-gb-win-11-00330-80000-00000-aa831-136748512/?c=750000000',
    categoryId: 1
  },

  //Smartphones
  {
  id: 101,
  name: 'Apple iPhone 17 Pro 256GB',
  description: 'Флагманский смартфон Apple с мощным процессором и продвинутой камерой.',
  price: 817957,
  rating: 4.9,
  image: 'assets/images2/s1_1.jpg',
  images: ['assets/images2/s1_1.jpg', 'assets/images2/s1_1.jpg'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000',
  categoryId: 2
},
{
  id: 102,
  name: 'Xiaomi Redmi Note 14 Pro 8/256GB',
  description: 'Мощный и доступный смартфон с большим AMOLED дисплеем.',
  price: 189990,
  rating: 4.7,
  image: 'assets/images/s2_1.jpg',
  images: ['assets/images/s2_1.jpg'],
  link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000',
  categoryId: 2
},
{
  id: 103,
  name: 'Samsung Galaxy S25 Ultra 12/256GB',
  description: 'Премиальный смартфон Samsung с топовой камерой и производительностью.',
  price: 749990,
  rating: 4.8,
  image: 'assets/images/s3_1.jpg',
  images: ['assets/images/s3_1.jpg'],
  link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
  categoryId: 2
},
{
  id: 104,
  name: 'Realme Note 70 6/128GB',
  description: 'Бюджетный смартфон для повседневных задач.',
  price: 89990,
  rating: 4.5,
  image: 'assets/images/s4_1.jpg',
  images: ['assets/images/s4_1.jpg'],
  link: 'https://kaspi.kz/shop/p/realme-note-70-6-gb-128-gb-chernyi-145564546/?c=750000000',
  categoryId: 2
},
{
  id: 105,
  name: 'Apple iPhone 15 128GB',
  description: 'Стильный и производительный смартфон Apple.',
  price: 459990,
  rating: 4.8,
  image: 'assets/images/s5_1.jpg',
  images: ['assets/images/s5_1.jpg'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000',
  categoryId: 2
}
];