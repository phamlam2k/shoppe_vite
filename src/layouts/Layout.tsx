import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import style from "./style.module.css";

export const Layout = ({ children }: any) => {
  return (
    <div className={style.children_container}>
      <Header></Header>
      <div className={style.children_content}>{children}</div>
      <Footer></Footer>
    </div>
  );
};
