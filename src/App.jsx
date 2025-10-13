import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import AppLayout from "./layout/AppLayout";
import PageNotFound from "./Pages/PageNotFound";
import User from "./Pages/User";
import Cart from "./Pages/Cart";
import Likes from "./Pages/Likes";
import Checkout from "./Pages/Checkout";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./Pages/DashboardPage";

// The PageWrapper component is no longer needed since animation is removed,
// but we'll use a simple Fragment or Div to wrap the content for structure.
const PageWrapper = ({ children }) => (
  <div className="w-full h-full">{children}</div>
);

// Define an array of paths that should have the Navbar
const pathsWithNavbar = [
  "/",
  "/home",
  "/about",
  "/contact",
  "/edit_profile",
  "/cart",
  "/likes",
  "/checkout",
  "/dashboard",
];

function AppRoutes() {
  const location = useLocation();

  // Check if the current path is in our list of paths that should have a Navbar
  const showNavbar = pathsWithNavbar.includes(location.pathname);

  // AnimatePresence is removed. The Routes component handles rendering.
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />

          {/* Routes that use AppLayout (typically includes a footer/global elements) */}
          <Route
            path="/home"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/edit_profile"
            element={
              <PageWrapper>
                <User />
              </PageWrapper>
            }
          />
          <Route
            path="/cart"
            element={
              <PageWrapper>
                <Cart />
              </PageWrapper>
            }
          />
          <Route
            path="/likes"
            element={
              <PageWrapper>
                <Likes />
              </PageWrapper>
            }
          />
          <Route
            path="/checkout"
            element={
              <PageWrapper>
                <Checkout />
              </PageWrapper>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PageWrapper>
                <DashboardPage />
              </PageWrapper>
            }
          />
        </Route>

        {/* Routes that do NOT use AppLayout (e.g., full-page forms) */}
        <Route
          path="/sign_up"
          element={
            <PageWrapper>
              <SignUp />
            </PageWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <PageWrapper>
              <Login />
            </PageWrapper>
          }
        />

        {/* Catch-all route */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <PageNotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
