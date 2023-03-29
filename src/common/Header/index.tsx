import style from "./style.module.css";
import { Link, NavLink } from "react-router-dom";
import { HeaderSeller, HEADER_SELLER, HEADER_USER } from "../../utils/common";
import { CartIcon, HeaderIcon } from "../CustomIcon";

export const Header = () => {
  return (
    <div className={style.header_container}>
      <div className={style.header_top}>
        <div>
          {HEADER_SELLER.map((content: HeaderSeller) => (
            <div className={style.header_seller}>
              <NavLink
                key={content.id}
                to={content.path}
                className={style.header_seller_list}
              >
                {content.name}
              </NavLink>
            </div>
          ))}
        </div>
        <div>
          {HEADER_USER.map((content: HeaderSeller) => (
            <div className={style.header_user}>
              <NavLink
                key={content.id}
                to={content.path}
                className={style.header_user_list}
              >
                {content.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className={style.header_bottom}>
        <Link to="/">
          <HeaderIcon width={150} height={50} />
        </Link>
        <div className={style.header_search_section}>
          <div className={style.search_field}>
            <input
              type="search"
              placeholder="Đăng ký và nhận voucher bạn mới đến 70k!"
            />
          </div>
          <button className={style.search_btn}>Search</button>
        </div>
        <div className={style.header_search_suggestion}>
          <ul className={style.header_search_suggest_list}>
            <li className={style.header_search_suggest_list_item}>
              <Link to="#" className={style.header_search_suggest_link}>
                Dép
              </Link>
            </li>
            <li className={style.header_search_suggest_list_item}>
              <Link to="#" className={style.header_search_suggest_link}>
                Áo Khoác
              </Link>
            </li>
            <li className={style.header_search_suggest_list_item}>
              <Link to="#" className={style.header_search_suggest_link}>
                Áo Croptop
              </Link>
            </li>
            <li className={style.header_search_suggest_list_item}>
              <Link to="#" className={style.header_search_suggest_link}>
                Áo Phông
              </Link>
            </li>
            <li className={style.header_search_suggest_list_item}>
              <Link to="#" className={style.header_search_suggest_link}>
                Váy
              </Link>
            </li>
            <li className={style.header_search_suggest_list_item}>
              <Link to="#" className={style.header_search_suggest_link}>
                Túi xách nữ
              </Link>
            </li>
            <li className={style.header_search_suggest_list_item}>
              <Link to="#" className={style.header_search_suggest_link}>
                Ốp iPhone
              </Link>
            </li>
            <li className={style.header_search_suggest_list_item}>
              <Link to="#" className={style.header_search_suggest_link}>
                Tai Nghe Bluetooth
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.header_cart}>
          <div className={style.header_cart_wrap}>
            <CartIcon height={24} width={27} />
          </div>
        </div>
      </div>
    </div>
  );
};
