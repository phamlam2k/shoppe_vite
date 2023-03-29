export const CartScreen = () => {
  return (
    <div>
      <section className="cart">
        <div className="cart-container">
          <div className="cart-title-tabel">
            <div className="cart-title-checkbox">
              <i className="fa-regular fa-square fa-lg"></i>
            </div>
            <div className="cart-title-product">Sản phẩm</div>
            <div className="cart-title-unit-price">Đơn giá</div>
            <div className="cart-title-quantity">Số lượng</div>
            <div className="cart-title-price">Số tiền</div>
            <div className="cart-title-action">Thao tác</div>
          </div>
          <div className="cart-body">
            <div className="cart-body-item">
              <div className="cart-body-product">
                <div className="cart-title-checkbox">
                  <i className="fa-regular fa-square fa-lg"></i>
                </div>
                <div className="cart-body-sticker">
                  <i className="fa-solid fa-shop fa-sm"></i>
                </div>
                <p className="shop-name">TOPSKIN</p>
              </div>
              <div className="cart-product">
                <div className="cart-title-checkbox">
                  <i className="fa-regular fa-square fa-lg"></i>
                </div>
                <div className="cart-product-item">
                  <div style={{ display: "flex" }}>
                    <img
                      src="https://cf.shopee.vn/file/5fbf7c585793e90aab043c4fe1e2c13b_tn"
                      alt=""
                      width="80px"
                      height="80px"
                    />
                    <div className="cart-product-item-text">
                      MIẾNG DÁN 3M HỞ ĐÈN LED - CÓ MẪU CHO TẤT CẢ CÁC DÒNG
                      MACBOOK
                    </div>
                  </div>
                </div>
                <div className="cart-product-text">
                  <span>Phân loại hàng</span>
                  <button title="more" className="button-more"></button>
                  <p style={{ marginTop: "7px" }}>
                    Black matrix,Macpro m1 13inh
                  </p>
                </div>
                <div className="cart-product-unitprice">₫225.000</div>
                <div className="cart-product-quantity">
                  <button className="button-plus">-</button>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="button-quantity"
                    value="1"
                    placeholder="xxxx"
                  />
                  <button className="button-plus">+</button>
                </div>
                <div className="cart-product-price">₫225.000</div>
                <div className="cart-product-action">
                  <p style={{ textAlign: "center" }}>Xóa</p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ textAlign: "center", color: "#ee4d2d" }}>
                      Tìm sản phẩm tương tự
                    </p>
                    <button title="more" className="button-more"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-body-item">
              <div className="cart-body-product">
                <div className="cart-title-checkbox">
                  <i className="fa-regular fa-square fa-lg"></i>
                </div>
                <div className="cart-body-sticker">
                  <i className="fa-solid fa-shop fa-sm"></i>
                </div>
                <p className="shop-name">TOPSKIN</p>
              </div>
              <div className="cart-product">
                <div className="cart-title-checkbox">
                  <i className="fa-regular fa-square fa-lg"></i>
                </div>
                <div className="cart-product-item">
                  <div style={{ display: "flex" }}>
                    <img
                      src="https://cf.shopee.vn/file/5fbf7c585793e90aab043c4fe1e2c13b_tn"
                      alt=""
                      width="80px"
                      height="80px"
                    />
                    <div className="cart-product-item-text">
                      MIẾNG DÁN 3M HỞ ĐÈN LED - CÓ MẪU CHO TẤT CẢ CÁC DÒNG
                      MACBOOK
                    </div>
                  </div>
                </div>
                <div className="cart-product-text">
                  <span>Phân loại hàng</span>
                  <button title="more" className="button-more"></button>
                  <p style={{ marginTop: "7px" }}>
                    Black matrix,Macpro m1 13inh
                  </p>
                </div>
                <div className="cart-product-unitprice">₫225.000</div>
                <div className="cart-product-quantity">
                  <button className="button-plus">-</button>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="button-quantity"
                    value="1"
                    placeholder="xxxx"
                  />
                  <button className="button-plus">+</button>
                </div>
                <div className="cart-product-price">₫225.000</div>
                <div className="cart-product-action">
                  <p style={{ textAlign: "center" }}>Xóa</p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ textAlign: "center", color: "#ee4d2d" }}>
                      Tìm sản phẩm tương tự
                    </p>
                    <button title="more" className="button-more"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-box">
            <div className="checkout-voucher-box">
              <div className="checkout-voucher-item">
                <div style={{ display: "flex", gap: "5px" }}>
                  <p>Shopee Voucher</p>
                </div>
                <a href="#" className="link link-voucher">
                  Chọn hoặc nhập mã
                </a>
              </div>
            </div>
            <div className="checkout-shopeecoin-box">
              <div className="checkout-shopeecoin-item">
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="checkbox" name="" id="" placeholder="xxxx" />
                  <div style={{ display: "flex", gap: "5px" }}>
                    <p>Shopee xu</p>
                  </div>
                  <p>Bạn chưa chọn sản phẩm</p>
                  <i className="fa-solid fa-question"></i>
                </div>
                <div>-₫0</div>
              </div>
            </div>
            <div className="final-checkout-box">
              <div className="final-checkout-item">
                <div className="cart-title-checkbox">
                  <i className="fa-regular fa-square fa-lg"></i>
                </div>
                <p>Chọn tất cả (2)</p>
                <p>Xóa</p>
                <p style={{ color: "#ee4d2d" }}>Lưu vào mục Đã thích</p>
              </div>
              <div className="final-checkout-item">
                <p>Tổng thanh toán (0 Sản phẩm):</p>
                <p>₫0</p>
                <button className="button-buy">Mua Hàng</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="product-suggest">
        <div className="product-suggest-title">GỢI Ý HÔM NAY</div>
        <div className="product-suggest-list">
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
          <div className="product-suggest-item">
            <div className="product-suggest-img">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22110-osx7lxwt7akv3c_tn"
                alt=""
                width="100%"
              />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "8px" }}>
              <p className="product-suggest-text">
                Giày đá bóng,giày đá banh,giày bóng đá,sân cỏ nhân tạo
              </p>
              <div className="product-suggest-info">
                <p className="product-suggest-price">đ20.000</p>
                <p className="product-suggest-sold">Đã bán 950</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
