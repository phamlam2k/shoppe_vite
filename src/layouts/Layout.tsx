import { Footer } from "../common/Footer";
import { Header } from "../common/Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="children-layout">{children}</div>
      <Footer />
    </>
  );
};
