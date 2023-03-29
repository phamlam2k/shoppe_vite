export const HistoryScreen = () => {
  return (
    <div>
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
            <div id="history-item-content"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
