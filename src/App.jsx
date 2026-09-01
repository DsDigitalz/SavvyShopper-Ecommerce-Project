import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import AppLayout from "./layout/AppLayout";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { Toaster } from "react-hot-toast";

// Lazy-load core page components
const Home          = lazy(() => import("./Pages/Home"));
const Shop          = lazy(() => import("./Pages/Shop"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail"));
const About         = lazy(() => import("./Pages/About"));
const Contact       = lazy(() => import("./Pages/Contact"));
const SignUp        = lazy(() => import("./Pages/SignUp"));
const Login         = lazy(() => import("./Pages/Login"));
const User          = lazy(() => import("./Pages/User"));
const Cart          = lazy(() => import("./Pages/Cart"));
const Likes         = lazy(() => import("./Pages/Likes"));
const Checkout      = lazy(() => import("./Pages/Checkout"));
const DashboardPage = lazy(() => import("./Pages/DashboardPage"));
const PageNotFound  = lazy(() => import("./Pages/PageNotFound"));

// Lazy-load Category pages
const WomensFashion = lazy(() => import("./Pages/WomensFashion"));
const MensFashion   = lazy(() => import("./Pages/MensFashion"));
const Electronics   = lazy(() => import("./Pages/Electronics"));
const HomeLifestyle = lazy(() => import("./Pages/HomeLifestyle"));
const Medicine      = lazy(() => import("./Pages/Medicine"));
const SportsOutdoor = lazy(() => import("./Pages/SportsOutdoor"));
const GroceriesPets = lazy(() => import("./Pages/GroceriesPets"));
const HealthBeauty  = lazy(() => import("./Pages/HealthBeauty"));

// Lazy-load Footer Link pages
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const TermsOfUse    = lazy(() => import("./Pages/TermsOfUse"));
const FAQ           = lazy(() => import("./Pages/FAQ"));
const Support       = lazy(() => import("./Pages/Support"));
const DownloadApp   = lazy(() => import("./Pages/DownloadApp"));

// Minimal inline fallback while a lazy chunk is loading
const PageLoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-zinc-200 border-t-red-500 rounded-full animate-spin" />
  </div>
);

const PageWrapper = ({ children }) => (
  <div className="w-full min-h-screen flex flex-col">{children}</div>
);

// Auth-only paths where Navbar should NOT be shown
const pathsWithoutNavbar = ["/login", "/sign_up"];

function AppRoutes() {
  const location = useLocation();
  const showNavbar = !pathsWithoutNavbar.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />

            <Route path="/home"         element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/shop"         element={<PageWrapper><Shop /></PageWrapper>} />
            <Route path="/product/:id"  element={<PageWrapper><ProductDetail /></PageWrapper>} />
            <Route path="/about"        element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact"      element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/edit_profile" element={<PageWrapper><User /></PageWrapper>} />
            <Route path="/cart"         element={<PageWrapper><Cart /></PageWrapper>} />
            <Route path="/likes"        element={<PageWrapper><Likes /></PageWrapper>} />
            <Route path="/checkout"     element={<PageWrapper><Checkout /></PageWrapper>} />
            <Route path="/dashboard"    element={<PageWrapper><DashboardPage /></PageWrapper>} />

            {/* Category Page Routes */}
            <Route path="/category/womens-fashion" element={<PageWrapper><WomensFashion /></PageWrapper>} />
            <Route path="/category/mens-fashion"   element={<PageWrapper><MensFashion /></PageWrapper>} />
            <Route path="/category/electronics"    element={<PageWrapper><Electronics /></PageWrapper>} />
            <Route path="/category/home-lifestyle" element={<PageWrapper><HomeLifestyle /></PageWrapper>} />
            <Route path="/category/medicine"       element={<PageWrapper><Medicine /></PageWrapper>} />
            <Route path="/category/sports-outdoor" element={<PageWrapper><SportsOutdoor /></PageWrapper>} />
            <Route path="/category/groceries-pets" element={<PageWrapper><GroceriesPets /></PageWrapper>} />
            <Route path="/category/health-beauty"  element={<PageWrapper><HealthBeauty /></PageWrapper>} />

            {/* Footer Link Routes */}
            <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/terms-of-use"   element={<PageWrapper><TermsOfUse /></PageWrapper>} />
            <Route path="/faq"            element={<PageWrapper><FAQ /></PageWrapper>} />
            <Route path="/support"        element={<PageWrapper><Support /></PageWrapper>} />
            <Route path="/download-app"   element={<PageWrapper><DownloadApp /></PageWrapper>} />
          </Route>

          {/* Auth routes — no AppLayout, no footer */}
          <Route path="/sign_up" element={<PageWrapper><SignUp /></PageWrapper>} />
          <Route path="/login"   element={<PageWrapper><Login /></PageWrapper>} />

          {/* Catch-all */}
          <Route path="/*" element={<PageWrapper><PageNotFound /></PageWrapper>} />
        </Routes>
      </Suspense>
    </>
  );
}

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "10px",
              background: "#1f2937",
              color: "#f9fafb",
              fontSize: "14px",
              fontWeight: "500",
            },
            success: {
              iconTheme: { primary: "#ef4444", secondary: "#fff" },
            },
          }}
        />
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
