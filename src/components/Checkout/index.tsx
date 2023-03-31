export const CheckoutScreen = () => {
  return (
    <div>
      <div className="address">
        <div className="address-border"></div>
        <div className="address-container">
          <div className="user-address-title">
            <div>
              <svg
                height="16"
                viewBox="0 0 12 16"
                width="12"
                color="#ee4d2d"
                fill="#ee4d2d"
              >
                <path
                  d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <p>Địa Chỉ Nhận Hàng</p>
          </div>
          <div className="user-address-info">
            <div className="user-name">Lý Anh Kiệt</div>
            <div className="user-phone">(+84) 917862882</div>
            <div className="user-address">Ngọc Thụy, Long Biên, Hà Nội</div>
            <div className="user-addres-default">Mặc định</div>
            <div className="user-action-change">Thay đổi</div>
          </div>
        </div>
      </div>
      <div className="checkout">
        <div className="checkout-title">
          <div className="checkout-title-box">
            <div className="checkout-title-name">Sản phẩm</div>
            <div className="checkout-titile-unitprice">Đơn giá</div>
            <div className="checkout-title-quantity">Số lượng</div>
            <div className="checkout-title-price">Thành tiền</div>
          </div>
        </div>
        <div>
          <div className="checkout-product">
            <div className="checkout-product-body">
              <div id="cart-product-content"></div>

              <div className="cart-voucher">
                <div
                  style={{
                    display: "flex",
                    width: "45%",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <svg
                      fill="#ee4d2d"
                      viewBox="0 -2 23 22"
                      width="21px"
                      height="19px"
                      color="#ee4d2d"
                    >
                      <g filter="url(#voucher-filter0_d)">
                        <mask id="a" fill="#fff">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                          ></path>
                        </mask>
                        <path
                          d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                          mask="url(#a)"
                        ></path>
                      </g>
                      <path
                        clip-rule="evenodd"
                        d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
                      ></path>
                      <defs>
                        <filter
                          id="voucher-filter0_d"
                          x="0"
                          y="1"
                          width="20"
                          height="16"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix>
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feBlend>
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                    <p>Voucher của shop</p>
                  </div>
                  <a href="#" className="link">
                    Chọn voucher
                  </a>
                </div>
              </div>
            </div>
            <div className="ship-box">
              <div className="note-message">
                <p>Lời nhắn</p>
                <div className="note-input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Lưu ý cho người bán"
                    className="inp-mess"
                  />
                </div>
              </div>
              <div className="ship-info">
                <div className="shipping-company">Đơn vị vận chuyển</div>
                <div className="shipping-unit-name">
                  <p
                    style={{
                      fontWeight: "600",
                      color: "black",
                      fontSize: "16px",
                    }}
                  >
                    Vận chuyển quốc tế
                  </p>
                  <p>Standard Express</p>
                  <p>Nhận hàng vào 27 Th03 - 29 Th03</p>
                </div>
                <div className="action-change-ship">THAY ĐỔI</div>
                <div className="shipping-fee">₫15.000</div>
              </div>
            </div>
            <div className="price-after-shipfee">
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <p>Tổng số tiền(1 sản phẩm):</p>
                <p style={{ color: "#ee4e2e", fontSize: "20px" }}>₫241.500</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shopee-voucher">
          <div className="shopee-voucher-item">
            <div className="cart-voucher cart-voucher-no-border">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <svg
                    fill="#ee4d2d"
                    viewBox="0 -2 23 22"
                    width="24px"
                    height="100%"
                    color="#ee4d2d"
                  >
                    <g filter="url(#voucher-filter0_d)">
                      <mask id="a" fill="#fff">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                        ></path>
                      </mask>
                      <path
                        d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                        mask="url(#a)"
                      ></path>
                    </g>
                    <path
                      clip-rule="evenodd"
                      d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
                    ></path>
                    <defs>
                      <filter
                        id="voucher-filter0_d"
                        x="0"
                        y="1"
                        width="20"
                        height="16"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                  <p>Voucher của shop</p>
                </div>
                <a href="#" className="link">
                  Chọn voucher
                </a>
              </div>
            </div>
          </div>
          <div className="shopee-voucher-item">
            <div className="cart-voucher cart-voucher-no-border">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <svg fill="none" viewBox="0 0 18 18" width="18px">
                    <path
                      stroke="#FFA600"
                      stroke-width="1.3"
                      d="M17.35 9A8.35 8.35 0 11.65 9a8.35 8.35 0 0116.7 0z"
                    ></path>
                    <path
                      fill="#FFA600"
                      fill-rule="evenodd"
                      stroke="#FFA600"
                      stroke-width=".2"
                      d="M6.86 4.723c-.683.576-.998 1.627-.75 2.464.215.725.85 1.258 1.522 1.608.37.193.77.355 1.177.463.1.027.2.051.3.08.098.03.196.062.294.096.06.021.121.044.182.067.017.006.107.041.04.014-.07-.028.071.03.087.037.286.124.56.27.82.44.114.076.045.024.151.111a2.942 2.942 0 01.322.303c.087.093.046.042.114.146.18.275.245.478.235.8-.01.328-.14.659-.325.867-.47.53-1.232.73-1.934.696a4.727 4.727 0 01-1.487-.307c-.45-.182-.852-.462-1.242-.737-.25-.176-.643-.04-.788.197-.17.279-.044.574.207.75.753.532 1.539.946 2.474 1.098.885.144 1.731.124 2.563-.224.78-.326 1.416-.966 1.607-1.772.198-.838-.023-1.644-.61-2.29-.683-.753-1.722-1.17-2.706-1.43a4.563 4.563 0 01-.543-.183c.122.048-.044-.02-.078-.035a4.77 4.77 0 01-.422-.212c-.594-.338-.955-.722-.872-1.369.105-.816.757-1.221 1.555-1.28.808-.06 1.648.135 2.297.554.614.398 1.19-.553.58-.947-1.33-.86-3.504-1.074-4.77-.005z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>Shopee xu</p>
                </div>
                <div className="shopee-coin">
                  -[đ4.300]
                  <i className="fa-regular fa-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment">
        <div className="payment-container">
          <div className="payment-box">
            <div className="payment-title">Phương thức thanh toán</div>
            <div className="payment-method-container">
              <a href="#" className="payment-method">
                Số dư TK Shopee (đ0)
              </a>
              <a href="#" className="payment-method">
                Ví ShopeePay
              </a>
              <a href="#" className="payment-method">
                Thẻ Tín dụng/Ghi nợ
              </a>
              <a href="#" className="payment-method">
                Thanh toán khi nhận hàng
              </a>
            </div>
          </div>
          <div className="payment-box">
            <div className="payment-title">Thanh toán khi nhận hàng</div>
            <div className="payment-text">
              Phí thu hộ: ₫0 VNĐ. Ưu đãi về phí vận chuyển (nếu có) áp dụng cả
              với phí thu hộ.
            </div>
          </div>
          <div className="detail-price-and-shipfee">
            <div className="product-price-box">
              <p>Tổng tiền hàng:</p>
              <p className="price" id="total-price"></p>
            </div>
            <div className="shipping-fee-box">
              <p>Phí vận chuyển:</p>
              <p className="price">0đ</p>
            </div>
            <div className="total-price-box">
              <p>Tổng thanh toán:</p>
              <p className="total-price price" id="total-price-all"></p>
            </div>
          </div>
          <div className="order-action-box">
            <div className="order-action-rule">
              Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
              <span style={{ color: "#05a" }}>Điều khoản Shopee</span>
            </div>
            <button className="btn-order">Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
};
