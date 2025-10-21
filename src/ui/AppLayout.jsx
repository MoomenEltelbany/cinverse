import { Outlet } from "react-router-dom";
import Header from "./Header";
import CTASection from "./CTASection";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />

      <main className="container mx-auto grow">
        <Outlet />
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}

export default AppLayout;
