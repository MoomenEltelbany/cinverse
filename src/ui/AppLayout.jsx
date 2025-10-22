import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import FooterLinksSection from "./FooterLinksSection";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />

      <main className="container mx-auto grow">
        <ScrollRestoration />
        <Outlet />
      </main>

      <FooterLinksSection />
      <Footer />
    </div>
  );
}

export default AppLayout;
