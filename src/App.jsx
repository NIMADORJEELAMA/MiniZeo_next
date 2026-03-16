import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import TopPerformers from "./pages/TopPerformers";
import { Analytics } from "@vercel/analytics/react";
import Internship from "./pages/Internship";
import CertificateVerify from "./pages/CertificateVerify";

/* Layout Component */
const Layout = ({ children, fullWidth = false }) => {
  return (
    <>
      <Navbar />
      <main className={fullWidth ? "pt-0" : "max-w-7xl mx-auto  px-6"}>
        {children}
      </main>
      <Footer />
    </>
  );
};

const Home = () => (
  <>
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Pricing />
    <Testimonials />
  </>
);

const App = () => {
  return (
    <>
      <Analytics />

      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/top-performers"
          element={
            <Layout fullWidth>
              <TopPerformers />
            </Layout>
          }
        />
        <Route
          path="/internship"
          element={
            <Layout>
              <Internship />
            </Layout>
          }
        />
        <Route
          path="/verify/:id"
          element={
            <Layout fullWidth>
              <CertificateVerify />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
