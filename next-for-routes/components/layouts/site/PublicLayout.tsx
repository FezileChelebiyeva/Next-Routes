import Footer from "./footer/Footer";
import Header from "./header/Header";

const PublicLayout = ({ children }: { children: React.ReactNode }) => (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
  export default PublicLayout;
  