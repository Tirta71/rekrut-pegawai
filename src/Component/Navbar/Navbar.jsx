import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const navItems = [
    { label: "Home", link: "/" }, // Set the link to an empty string for the root path
    { label: "About", link: "about" },
    { label: "Jobs", link: "jobs" },
    { label: "Announcement", link: "/Hasil-rekrut" },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 fixed-top">
        <Link
          to=""
          className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
          onClick={scrollToTop}
        >
          <h1 className="m-0 text-primary">GreenScale</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div
            className="navbar-nav ms-auto p-4 p-lg-0"
            style={{ cursor: "pointer" }}
          >
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </div>

          <a
            href="#jobs"
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Lamar Pekerjaan<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
}

const NavItem = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current route matches the link
  const isActive = (link) => link === location.pathname;

  if (item.dropdownItems) {
    return (
      <div className="nav-item dropdown">
        <a
          href={item.link}
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          {item.label}
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          {item.dropdownItems.map((dropdownItem, index) => (
            <a
              key={index}
              href={dropdownItem.toLowerCase().replace(" ", "-") + ".html"}
              className="dropdown-item"
            >
              {dropdownItem}
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (item.label === "Announcement" || item.label === "Home") {
    return (
      <a
        href={item.link} // Use the provided link directly
        className={`nav-item nav-link ${isActive(item.link) ? "active" : ""}`}
      >
        {item.label}
      </a>
    );
  }

  if (isActive("/Hasil-rekrut")) {
    return (
      <ScrollLink
        to={item.link}
        className={`nav-item nav-link ${isActive(item.link) ? "active" : ""}`}
        smooth={true}
        duration={500}
      >
        {item.label}
      </ScrollLink>
    );
  }

  return (
    <Link
      to={item.link}
      className="nav-item nav-link"
      smooth={true}
      duration={500}
    >
      {item.label}
    </Link>
  );
};
