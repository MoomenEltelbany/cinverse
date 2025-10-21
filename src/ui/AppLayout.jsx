import { Outlet } from "react-router-dom";
import Header from "./Header";
import CTA from "./CTA";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <CTA />
      <Footer />
    </>
  );
}

export default AppLayout;
