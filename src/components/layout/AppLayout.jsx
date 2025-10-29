import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Header from "./Header";
import FooterLinksSection from "./FooterLinksSection";
import Footer from "./Footer";
import Loader from "../common/Loader";
import TrialSection from "../../features/home/TrialSection";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto grow">
        <ScrollRestoration />
        {isLoading ? <Loader /> : <Outlet />}
      </main>

      <TrialSection />
      <FooterLinksSection />
      <Footer />
    </div>
  );
}

export default AppLayout;
