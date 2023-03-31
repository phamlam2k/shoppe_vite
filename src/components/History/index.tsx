import { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { supabase } from "../../supabaseClient";

export const HistoryScreen = ({ token }: { token: any }) => {
  const [list, setList] = useState<
    {
      id: number;
      product:
        | {
            name: string;
            price: number;
            image: string;
          }
        | {
            name: string;
            price: number;
            image: string;
          }[]
        | null;
      quantity: string;
      totalPrice: string;
    }[]
  >([]);

  useEffect(() => {
    if (token) {
      console.log(token);
      getList();
    }
  }, [token]);

  const getList = async () => {
    try {
      const { data } = (await supabase
        .from("order")
        .select(
          `
         id,
         product: productId(name, price, image),
         quantity,
         totalPrice
        `
        )
        .eq("userId", Number(token.id))) as any;

      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(list);

  return (
    <Layout>
      <section className="history">
        <div className="history-container">
          <div className="info-box">
            <div className="user-info">
              <div className="avatar">
                <svg
                  enable-background="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x="0"
                  y="0"
                  stroke="#c6c6c6"
                  fill="#c6c6c6"
                  width="24px"
                  height="24px"
                  className="svg-user"
                >
                  <g>
                    <circle
                      cx="7.5"
                      cy="4.5"
                      fill="none"
                      r="3.8"
                      stroke-miterlimit="10"
                    ></circle>
                    <path
                      d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="user-name-box">
                <p className="user-name">LyAnhKiet</p>
                <p className="action-change-info">
                  <i className="fa-solid fa-pencil fa-sm"></i>
                  Sửa hồ sơ
                </p>
              </div>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <div className="item-list">
                    <img
                      src="https://down-vn.img.susercontent.com/file/sg-11134004-23030-r6gwgr893movc4"
                      alt=""
                      width="20px"
                      height="20px"
                    />
                    <p>Lương về sale to</p>
                  </div>
                </li>
                <li>
                  <div className="item-list">
                    <img
                      src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4"
                      alt=""
                      width="20px"
                      height="20px"
                    />
                    <p>Tài khoản của tôi</p>
                  </div>
                </li>
                <li>
                  <div className="item-list">
                    <img
                      src="https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078"
                      alt=""
                      width="20px"
                      height="20px"
                    />
                    <p>Đơn mua</p>
                  </div>
                </li>
                <li>
                  <div className="item-list">
                    <img
                      src="https://down-vn.img.susercontent.com/file/e10a43b53ec8605f4829da5618e0717c"
                      alt=""
                      width="20px"
                      height="20px"
                    />
                    <p>Thông báo</p>
                  </div>
                </li>
                <li>
                  <div className="item-list">
                    <img
                      src="https://down-vn.img.susercontent.com/file/84feaa363ce325071c0a66d3c9a88748"
                      alt=""
                      width="20px"
                      height="20px"
                    />
                    <p>Kho voucher</p>
                  </div>
                </li>
                <li>
                  <div className="item-list">
                    <img
                      src="https://down-vn.img.susercontent.com/file/a0ef4bd8e16e481b4253bd0eb563f784"
                      alt=""
                      width="20px"
                      height="20px"
                    />
                    <p>Shopee xu</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="history-main">
            <div className="status-box">
              <div className="status-list status-list-active">Tất cả</div>
              <div className="status-list">Chờ thanh toán</div>
              <div className="status-list">Vận chuyển</div>
              <div className="status-list">Đang giao</div>
              <div className="status-list">Hoàn thành</div>
              <div className="status-list">Đã hủy</div>
              <div className="status-list">Trả hàng/Hoàn tiền</div>
            </div>
            <div className="history-search">
              <i
                style={{ margin: "15px" }}
                className="fa-solid fa-magnifying-glass fa-lg"
              ></i>
              <input
                type="text"
                name=""
                id=""
                className="search-history-input"
                placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên sản phẩm"
              />
            </div>
            <div id="history-item-content">
              {list.map((item: any) => (
                <div className="history-item">
                  <div className="info-history-item-box">
                    <div className="shop-info-box">
                      <div className="shop-info">
                        <i className="fa-solid fa-shop"></i>
                        <p className="shop-name">TOPSKIN</p>
                        <div className="chat">
                          <button className="chat-button">
                            <i className="fa-solid fa-message"></i>
                            <span>Chat</span>
                          </button>
                        </div>
                        <div className="visit-shop">
                          <button className="visit-button">
                            <i className="fa-solid fa-shop"></i>
                            <span>Xem shop</span>
                          </button>
                        </div>
                      </div>
                      <div className="status">
                        <div className="ship-status">
                          <i
                            className="fa-solid fa-truck fa-sm"
                            style={{ color: "#07bb43" }}
                          ></i>
                          <p className="ship-status-text">
                            Giao hàng thành công
                          </p>
                        </div>
                        <div className="review">Đánh giá</div>
                      </div>
                    </div>
                    <div className="product-info-container">
                      <div className="product-info">
                        <img
                          src={item.product.image}
                          alt=""
                          className="product-img"
                        />
                        <div className="product-info-des">
                          <div className="product-name">
                            ${item.product.name}
                          </div>
                          <p className="product-quantity">x${item.quantity}</p>
                        </div>
                      </div>
                      <div className="product-price">₫${item.totalPrice}</div>
                    </div>
                  </div>
                  <div className="buy-again-box">
                    <div className="total-price-box">
                      <div className="icon-box">
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 253 263"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M126.5 0.389801C126.5 0.389801 82.61 27.8998 5.75 26.8598C5.08763 26.8507 4.43006 26.9733 3.81548 27.2205C3.20091 27.4677 2.64159 27.8346 2.17 28.2998C1.69998 28.7657 1.32713 29.3203 1.07307 29.9314C0.819019 30.5425 0.688805 31.198 0.689995 31.8598V106.97C0.687073 131.07 6.77532 154.78 18.3892 175.898C30.003 197.015 46.7657 214.855 67.12 227.76L118.47 260.28C120.872 261.802 123.657 262.61 126.5 262.61C129.343 262.61 132.128 261.802 134.53 260.28L185.88 227.73C206.234 214.825 222.997 196.985 234.611 175.868C246.225 154.75 252.313 131.04 252.31 106.94V31.8598C252.31 31.1973 252.178 30.5414 251.922 29.9303C251.667 29.3191 251.292 28.7649 250.82 28.2998C250.35 27.8358 249.792 27.4696 249.179 27.2225C248.566 26.9753 247.911 26.852 247.25 26.8598C170.39 27.8998 126.5 0.389801 126.5 0.389801Z"
                            fill="#ee4d2d"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M207.7 149.66L119.61 107.03C116.386 105.472 113.914 102.697 112.736 99.3154C111.558 95.9342 111.772 92.2235 113.33 88.9998C114.888 85.7761 117.663 83.3034 121.044 82.1257C124.426 80.948 128.136 81.1617 131.36 82.7198L215.43 123.38C215.7 120.38 215.85 117.38 215.85 114.31V61.0298C215.848 60.5592 215.753 60.0936 215.57 59.6598C215.393 59.2232 215.128 58.8281 214.79 58.4998C214.457 58.1705 214.063 57.909 213.63 57.7298C213.194 57.5576 212.729 57.4727 212.26 57.4798C157.69 58.2298 126.5 38.6798 126.5 38.6798C126.5 38.6798 95.31 58.2298 40.71 57.4798C40.2401 57.4732 39.7735 57.5602 39.3376 57.7357C38.9017 57.9113 38.5051 58.1719 38.1709 58.5023C37.8367 58.8328 37.5717 59.2264 37.3913 59.6604C37.2108 60.0943 37.1186 60.5599 37.12 61.0298V108.03L118.84 147.57C121.591 148.902 123.808 151.128 125.129 153.884C126.45 156.64 126.797 159.762 126.113 162.741C125.429 165.72 123.755 168.378 121.363 170.282C118.972 172.185 116.006 173.221 112.95 173.22C110.919 173.221 108.915 172.76 107.09 171.87L40.24 139.48C46.6407 164.573 62.3785 186.277 84.24 200.16L124.49 225.7C125.061 226.053 125.719 226.24 126.39 226.24C127.061 226.24 127.719 226.053 128.29 225.7L168.57 200.16C187.187 188.399 201.464 170.892 209.24 150.29C208.715 150.11 208.2 149.9 207.7 149.66Z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <span>Thành tiền:</span>
                      </div>
                      <p className="total-price">₫${item.totalPrice}</p>
                    </div>
                    <div className="button-box">
                      <p className="button-box-text">
                        Không nhận được đánh giá
                      </p>
                      <div>
                        <button className="buy-again-button">Mua lại</button>
                        <button className="button-box-button">
                          Liên hệ người bán
                        </button>
                        <button className="button-box-button">
                          Xem Đánh Giá Shop
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
