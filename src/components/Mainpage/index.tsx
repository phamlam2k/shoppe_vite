import { Link } from "react-router-dom";
import { Form, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { Layout } from "../../layouts/Layout";

export const MainPageScreen = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const { data } = await supabase.from("products").select("*");
    setProducts(data);
  };

  return (
    <Layout>
      <div className="app_banner">
        <div className="grid wide">
          <div className="row sm-gutter app_banner-content">
            <div className="col l-8 m-12 c-12">
              <div className="full-home-banners_main">
                <div className="full-home-banners_main-inner">
                  <Link to="" className="full-home-banners_main-item">
                    <img
                      src="https://cf.shopee.vn/file/fa79715264f5c973648d8096a8aa9773_xxhdpi"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col l-4 m-12">
              <div className="row">
                <Link to="#" className="col l-12 m-6 full-home-banners_right">
                  <div
                    className="full-home-banners_right-img"
                    style={{
                      backgroundImage:
                        "url('https://cf.shopee.vn/file/vn-50009109-78cabd395f508fe5af4dd7a5d0402e29_xhdpi')",
                    }}
                  ></div>
                </Link>
                <Link to="#" className="col l-12 m-6 full-home-banners_right">
                  <div
                    className="full-home-banners_right-img"
                    style={{
                      backgroundImage:
                        "url('https://cf.shopee.vn/file/vn-50009109-d21feeb5b139fd47a4b9e6a1fa07e9a3_xhdpi')",
                    }}
                  ></div>
                </Link>
              </div>
            </div>
          </div>
          <ul className="app_banner-list">
            <li className="banner-list_item">
              <Link to="" className="banner-list_link">
                <div
                  className="banner-list_img"
                  style={{
                    backgroundImage:
                      "url('https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi')",
                  }}
                ></div>
                <span className="banner-list_title">
                  Gì cũng rẻ - Mua là Freeship
                </span>
              </Link>
            </li>
            <li className="banner-list_item">
              <Link to="" className="banner-list_link">
                <div
                  className="banner-list_img"
                  style={{
                    backgroundImage:
                      "url('https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi')",
                  }}
                ></div>
                <span className="banner-list_title">Mã Giảm Giá</span>
              </Link>
            </li>
            <li className="banner-list_item">
              <Link to="" className="banner-list_link">
                <div
                  className="banner-list_img"
                  style={{
                    backgroundImage:
                      "url('https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi')",
                  }}
                ></div>
                <span className="banner-list_title">Miễn Phí Vận Chuyển</span>
              </Link>
            </li>
            <li className="banner-list_item">
              <Link to="" className="banner-list_link">
                <div
                  className="banner-list_img"
                  style={{
                    backgroundImage:
                      "url('https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi')",
                  }}
                ></div>
                <span className="banner-list_title">Bắt Trend - Giá Sốc</span>
              </Link>
            </li>
            <li className="banner-list_item">
              <Link to="" className="banner-list_link">
                <div
                  className="banner-list_img"
                  style={{
                    backgroundImage:
                      "url('https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi')",
                  }}
                ></div>
                <span className="banner-list_title">Voucher Từ 100.000 Xu</span>
              </Link>
            </li>
            <li className="banner-list_item">
              <Link to="" className="banner-list_link">
                <div
                  className="banner-list_img"
                  style={{
                    backgroundImage:
                      "url('https://cf.shopee.vn/file/8d6d5ee795e7675fed39d31ba04c3b92_xhdpi')",
                  }}
                ></div>
                <span className="banner-list_title">Hàng Hiệu Giá Tốt</span>
              </Link>
            </li>
            <li className="banner-list_item">
              <Link to="" className="banner-list_link">
                <div
                  className="banner-list_img"
                  style={{
                    backgroundImage:
                      "url('https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi')",
                  }}
                ></div>
                <span className="banner-list_title">Hàng Quốc Tế</span>
              </Link>
            </li>
            <li className="banner-list_item">
              <Link to="" className="banner-list_link">
                <div
                  className="banner-list_img"
                  style={{
                    backgroundImage:
                      "url('https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi')",
                  }}
                ></div>
                <span className="banner-list_title">
                  Nạp Điện Thoại & Thẻ Game
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="category">
        <div className="category-container">
          <div className="category_title">DANH MỤC</div>
          <div className="category_list">
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">
                  Điện Thoại & Phụ Kiện
                </div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Máy Tính & Laptop</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Thiết Bị Điện Tử</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Máy Tính & Laptop</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">
                  Máy Ảnh & Máy Quay Phim
                </div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Đồng Hồ</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Giày Dép Nam</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">
                  Thiết Bị Điện Gia Dụng
                </div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Thể Thao & Du Lịch</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">
                  Ô Tô & Xe Máy & Xe Đạp
                </div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Thời Trang Nữ</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Mẹ & Bé</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Nhà Cửa & Đời Sống</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Sắc Đẹp</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/49119e891a44fa135f5f6f5fd4cfc747_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Sức Khỏe</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Giày Dép Nữ</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Túi Ví Nữ</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">
                  Phụ Kiện & Trang Sức Nữ
                </div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Bách Hóa Online</div>
              </button>
            </div>
            <div className="category_item">
              <button className="category_button">
                <img
                  src="https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn"
                  alt=""
                  className="category_img"
                />
                <div className="category_button-title">Nhà Sách Online</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flashsale">
        <div className="flashsale-container">
          <div className="flashsale_title">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/fb1088de81e42c4e538967ec12cb5caa.png"
              alt="flashsale_img"
            />
            <button className="flashsale_button">
              Xem Tất Cả
              <i className="fa-solid fa-angle-right flashsale_button-icon"></i>
            </button>
          </div>
          <div className="flashsale_card-list">
            <div className="flashsale_card-item">
              <div className="flashsale_img"></div>
              <div className="flashsale_content">
                <div className="flashsale_price">
                  <span>₫</span>349.000
                </div>
                <div className="flashsale_bar">ĐANG BÁN CHẠY</div>
              </div>
            </div>
            <div className="flashsale_card-item">
              <div className="flashsale_img"></div>
              <div className="flashsale_content">
                <div className="flashsale_price">
                  <span>₫</span>349.000
                </div>
                <div className="flashsale_bar">ĐANG BÁN CHẠY</div>
              </div>
            </div>
            <div className="flashsale_card-item">
              <div className="flashsale_img"></div>
              <div className="flashsale_content">
                <div className="flashsale_price">
                  <span>₫</span>349.000
                </div>
                <div className="flashsale_bar">ĐANG BÁN CHẠY</div>
              </div>
            </div>
            <div className="flashsale_card-item">
              <div className="flashsale_img"></div>
              <div className="flashsale_content">
                <div className="flashsale_price">
                  <span>₫</span>349.000
                </div>
                <div className="flashsale_bar">ĐANG BÁN CHẠY</div>
              </div>
            </div>
            <div className="flashsale_card-item">
              <div className="flashsale_img"></div>
              <div className="flashsale_content">
                <div className="flashsale_price">
                  <span>₫</span>349.000
                </div>
                <div className="flashsale_bar">ĐANG BÁN CHẠY</div>
              </div>
            </div>
            <div className="flashsale_card-item">
              <div className="flashsale_img"></div>
              <div className="flashsale_content">
                <div className="flashsale_price">
                  <span>₫</span>349.000
                </div>
                <div className="flashsale_bar">ĐANG BÁN CHẠY</div>
              </div>
            </div>
            <div className="flashsale_card-item">
              <div className="flashsale_img"></div>
              <div className="flashsale_content">
                <div className="flashsale_price">
                  <span>₫</span>349.000
                </div>
                <div className="flashsale_bar">ĐANG BÁN CHẠY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subbanner-container">
        <div className="subbanner">
          <img
            src="https://cf.shopee.vn/file/sg-50009109-f7acb64c3cdcc9c762e3c37d87f1fbfe"
            alt="subbaner_img"
          />
        </div>
      </div>
      <div className="mall">
        <div className="mall-container">
          <div className="mall-header">
            <div className="mall-title">
              <Link to="#" className="mall-link">
                SHOPEE MALL
              </Link>
              <div className="mall-policy">
                <div className="mall-policy-item">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/6c502a2641457578b0d5f5153b53dd5d.png"
                    alt=""
                    height="17px"
                    width="17px"
                  />
                  <p>7 Ngày Miễn Phí Trả Hàng</p>
                </div>
                <div className="mall-policy-item">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/511aca04cc3ba9234ab0e4fcf20768a2.png"
                    alt=""
                    height="17px"
                    width="17px"
                  />
                  <p>Hàng Chính Hãng 100%</p>
                </div>
                <div className="mall-policy-item">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/16ead7e0a68c3cff9f32910e4be08122.png"
                    alt=""
                    height="17px"
                    width="17px"
                  />
                  <p>Miễn Phí Vận Chuyển</p>
                </div>
              </div>
            </div>
            <div className="mall-seeall">
              Xem tất cả
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </div>
          </div>
          <div className="mall-body">
            <div className="mall-banner">
              <img
                src="https://cf.shopee.vn/file/vn-50009109-cbe7e5fcf9175a8cf49d359ce8f08f1b"
                alt=""
              />
            </div>
            <div className="mall-list">
              <div className="mall-shop">
                <img
                  src="https://cf.shopee.vn/file/vn-50009109-82be10ca078f0c06da5e4d7b6f74fea3_xhdpi"
                  alt=""
                  width="100%"
                />
                <p className="mall-sale">Ưu đãi đến 50%</p>
              </div>
              <div className="mall-shop">
                <img
                  src="https://cf.shopee.vn/file/0b7528892f34b1ceb5e7e3883c34adb1_xhdpi"
                  alt=""
                  width="100%"
                />
                <p className="mall-sale">Nội y Sabina 9k</p>
              </div>
              <div className="mall-shop">
                <img
                  src="https://cf.shopee.vn/file/6074cc75484d535e4de665bce62fe879_xhdpi"
                  alt=""
                  width="100%"
                />
                <p className="mall-sale">Da xinh quà xịn</p>
              </div>
              <div className="mall-shop">
                <img
                  src="https://cf.shopee.vn/file/ee98c39797a226f6528a154a36303104_xhdpi"
                  alt=""
                  width="100%"
                />
                <p className="mall-sale">Ưu đãi đến 50%</p>
              </div>
              <div className="mall-shop">
                <img
                  src="https://cf.shopee.vn/file/vn-50009109-9443963e65c1f78423b596244aa81eac_xhdpi"
                  alt=""
                  width="100%"
                />
                <p className="mall-sale">Voucher 40.000đ</p>
              </div>
              <div className="mall-shop">
                <img
                  src="https://cf.shopee.vn/file/c7b843e477e90f2a0ead5675b457f71a_xhdpi"
                  alt=""
                  width="100%"
                />
                <p className="mall-sale">Mua là có quà</p>
              </div>
              <div className="mall-shop">
                <img
                  src="https://cf.shopee.vn/file/be691f1a5b5a715c933e55f7fd2d7f0b_xhdpi"
                  alt=""
                  width="100%"
                />
                <p className="mall-sale">Sale chào hè 50%</p>
              </div>
              <div className="mall-shop">
                <img
                  src="https://cf.shopee.vn/file/00413fcf230d45da42838f70129559e5_xhdpi"
                  alt=""
                  width="100%"
                />
                <p className="mall-sale">Ưu đãi đến 40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="topsearch">
        <div className="topsearch-container">
          <div className="topsearch-header">
            <div className="topsearch-title">TÌM KIẾM HÀNG ĐẦU</div>
            <div className="topsearch-seeall">
              Xem tất cả
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </div>
          </div>
          <div className="topsearch-body">
            <div className="topsearch-list">
              <div className="topsearch-item">
                <div className="topsearch-product">
                  <img
                    src="https://cf.shopee.vn/file/63d7bef820b88a57b5ae4713eb2d20d7"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <div className="topsearch-sales">Bán 55k+ / tháng</div>
                  <div className="topsearch-tag">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <p className="topsearch-text">Áo Thun Local Brand</p>
              </div>
              <div className="topsearch-item">
                <div className="topsearch-product">
                  <img
                    src="https://cf.shopee.vn/file/c8169887b60e20a161d0288e6f9a193e"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <div className="topsearch-sales">Bán 71k+ / tháng</div>
                  <div className="topsearch-tag">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <p className="topsearch-text">Son Kem Lì</p>
              </div>
              <div className="topsearch-item">
                <div className="topsearch-product">
                  <img
                    src="https://cf.shopee.vn/file/3fac9e446b871a11d16438d370ee425d"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <div className="topsearch-sales">Bán 53k+ / tháng</div>
                  <div className="topsearch-tag">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <p className="topsearch-text">Balo Nữ</p>
              </div>
              <div className="topsearch-item">
                <div className="topsearch-product">
                  <img
                    src="https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <div className="topsearch-sales">Bán 147k+ / tháng</div>
                  <div className="topsearch-tag">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <p className="topsearch-text">Ốp Lưng iPhone</p>
              </div>
              <div className="topsearch-item">
                <div className="topsearch-product">
                  <img
                    src="https://cf.shopee.vn/file/2c9dab61383d096c78823f9f8b5c3f82"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <div className="topsearch-sales">Bán 63k+ / tháng</div>
                  <div className="topsearch-tag">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <p className="topsearch-text">Bao Cao Su</p>
              </div>
              <div className="topsearch-item">
                <div className="topsearch-product">
                  <img
                    src="https://cf.shopee.vn/file/8e78019372e7c63a5c2f372d35532e56"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <div className="topsearch-sales">Bán 93k+ / tháng</div>
                  <div className="topsearch-tag">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <p className="topsearch-text">Balo Thời Trang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-suggest">
        <div className="product-suggest-title">GỢI Ý HÔM NAY</div>
        <div className="product-suggest-content">
          <div className="product-suggest-list">
            {products &&
              products.map((product: any) => (
                <a
                  className="product-suggest-item"
                  href={`/product/${product.id}`}
                >
                  <div className="product-suggest-img">
                    <img src={product.image} alt="" width="100%" />
                  </div>
                  <div style={{ backgroundColor: "#fff", padding: "8px" }}>
                    <p className="product-suggest-text">{product.name}</p>
                    <div className="product-suggest-info">
                      <p className="product-suggest-price">{product.price}</p>
                      <p className="product-suggest-sold">
                        Đã bán {product.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="product-suggest-more-popup">
                    Sản phẩm tương tự
                  </div>
                </a>
              ))}
          </div>
        </div>

        <div className="container container-button-seemore">
          <button className="btn-seemore" type="submit">
            Xem thêm
          </button>
        </div>
      </div>
    </Layout>
  );
};
