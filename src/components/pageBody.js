import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingsPage from "./bookingspage";
import ContactPage from "./contactpage";
import PiercingsPage from "./piercingspage";
import FAQPage from "./faqPage";
import HomePage from "./homepage";
import JewelleryPage from "./jewelleryPage";
import AboutPage from "./aboutPage";
import ErrorPage from "./errorPage";
import Privacy from "./privacy";
import { ErrorBoundary } from "react-error-boundary";

const PageBody = () => {

  const errorFallback = ({ error }) => {
    return <ErrorPage />;
  };


  return (

    <div className="pageBody">
      <ErrorBoundary FallbackComponent={errorFallback}>
       <Routes>
        <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
        <Route path="bookings" element={<BookingsPage />} errorElement={<ErrorPage />} />
        <Route path="piercings" element={<PiercingsPage />} errorElement={<ErrorPage />} />
        <Route path="faq" element={<FAQPage />} errorElement={<ErrorPage />} />
        <Route path="contact" element={<ContactPage />} errorElement={<ErrorPage />} />
        <Route path="privacy" element={<Privacy />} errorElement={<ErrorPage />} />
        <Route path="jewellery" element={<JewelleryPage />} errorElement={<ErrorPage />} />
        <Route path="about" element={<AboutPage />} errorElement={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
      </Routes> 
      </ErrorBoundary>
    </div>
  );
};

export default PageBody;
