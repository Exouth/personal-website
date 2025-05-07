import { BrowserRouter } from "react-router-dom";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import ScrollToTop from "@components/router/ScrollToTop";
import AppRouter from "@components/router/AppRouter";
import BackgroundEffect from "@components/layout/BackgroundEffect";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen text-white">
        <Navbar />

        <BackgroundEffect />

        <ScrollToTop />
        <div className="flex-grow flex flex-col">
          <AppRouter />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}