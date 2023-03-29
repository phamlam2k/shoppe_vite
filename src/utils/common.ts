export {};

export interface MenuBar {
  id: number;
  name: string;
  path: string;
}

export interface HeaderSeller {
  id: number;
  name: string;
  path: string;
}

export interface HeaderUser {
  id: number;
  name: string;
  path: string;
}

export const MENU_BAR = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "History",
    path: "/history",
  },
  {
    id: 3,
    name: "Cart",
    path: "/cart",
  },
  {
    id: 4,
    name: "Checkout",
    path: "/checkout",
  },
  {
    id: 5,
    name: "AddProduct",
    path: "/add_product",
  },
  {
    id: 6,
    name: "Product",
    path: "/prodcut",
  },
];

export const HEADER_SELLER = [
  {
    id: 1,
    name: "Kênh người bán",
    path: "/",
  },
  {
    id: 2,
    name: "Trở thành Người bán Shopee",
    path: "/",
  },
  {
    id: 3,
    name: "Kênh người bán",
    path: "/",
  },
  {
    id: 4,
    name: "Kết nối",
    path: "/",
  },
];

export const HEADER_USER = [
  {
    id: 1,
    name: "Thông báo",
    path: "/",
  },
  {
    id: 1,
    name: "Hỗ trợ",
    path: "/",
  },
  {
    id: 1,
    name: "Tiếng Việt",
    path: "/",
  },
  {
    id: 1,
    name: "Đăng ký",
    path: "/",
  },
  {
    id: 1,
    name: "Đăng nhập",
    path: "/login",
  },
];
