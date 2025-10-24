import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Header from "./Header";
import FooterLinksSection from "./FooterLinksSection";
import Footer from "./Footer";
import Loader from "./Loader";
import ErrorPage from "../pages/ErrorPage";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {isLoading && <Loader />}

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
