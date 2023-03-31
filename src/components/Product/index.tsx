import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { Layout } from "../../layouts/Layout";

interface ProductDataResponse {
  count: number | null;
  data: Product[];
  error: string | null;
  status: number;
  statusText: string;
}

export interface Product {
  created_at: string | null;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export const ProductScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [count, setCount] = useState<number>(1);
  const [product, setProduct] = useState<Product>();

  const cart = useMemo(() => {
    return JSON.parse(localStorage.getItem("@cart") ?? "[]");
  }, []);

  useEffect(() => {
    if (typeof params.id !== "undefined") {
      getProduct();
    }
  }, [params]);

  const getProduct = async () => {
    try {
      const res = (await supabase
        .from("products")
        .select("*")
        .eq("id", Number(params.id))) as ProductDataResponse;

      if (res && res.data) {
        setProduct(res.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onBuyProduct = () => {
    navigate("/cart");
    localStorage.setItem(
      "@cart",
      JSON.stringify([...cart, { ...product, count }])
    );
  };

  return (
    <Layout>
      {product && (
        <div className="product">
          <div className="product-container">
            <img
              width="500"
              height="500"
              id="product-container-img"
              src={product.image}
              alt="productimg"
            />
            <div className="product-info">
              <p style={{ fontSize: "20px" }} id="product-info-name">
                {product.name}
              </p>
              <div className="total-price-box">
                <p id="total-price">{product.price}</p>
              </div>
              <div className="product-box">
                <button
                  className="button-subtract"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  name=""
                  id="product-box-input"
                  className="button-quantity"
                  placeholder="xxxx"
                  value={count}
                />
                <button
                  className="button-plus"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="buy-button-container">
                <button className="buy-button" onClick={onBuyProduct}>
                  Mua Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
    </Layout>
  );
};
