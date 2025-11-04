import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";

import TrialSection from "../../features/home/TrialSection";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../common/Loader";

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
      <Footer />
    </div>
  );
}

export default AppLayout;
