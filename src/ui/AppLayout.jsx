import { Outlet } from "react-router-dom";
import Header from "./Header";
import CTA from "./CTA";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />

      <main className="container mx-auto grow">
        <Outlet />
      </main>

      <CTA />
      <Footer />
    </div>
  );
}

export default AppLayout;
