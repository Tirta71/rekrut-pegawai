/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import About from "../Component/About";
import JobListing from "../Component/JobListing";
import Footer from "../Component/Footer";

export default function Home() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <Navbar />
        <About />
        <JobListing />
        <Footer />

        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
}
