import Navbar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <div className={styles.restrictedContainer}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
