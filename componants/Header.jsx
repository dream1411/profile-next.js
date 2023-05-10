import Link from "next/link";
import React ,{ useState, useEffect }from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from '../styles/Loading.module.css';
function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolled = currentScrollPos > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // console.log(userProfile);
  // function handleLogout() {
  //   localStorage.clear();
  //   router.push("/login").then(() => window.location.reload());
  // }
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 d-flex flex-wrap">
              <p className="d-flex me-4 mb-0">
                <i className="bi-geo-alt me-2"></i>
                123/8 goodtime สันต้นดู่
              </p>

              <p className="d-flex mb-0">
                <i className="bi-envelope me-2"></i>

                <a href="mailto:info@company.com">prommin.intani@gmail.com</a>
              </p>
            </div>

            <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-youtube"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-whatsapp"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div id="sticky-wrapper"  >
        <nav className={`navbar navbar-expand-lg bg-light shadow-lg ${isScrolled ? styles.scrolled : ''} ${styles.stickyWrapper}`} >
          <div className="container">
            <Link className="navbar-brand" href="/">
               PHROMMIN INTANI
                <small>WEB DEVELOPER</small>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link click-scroll active" href="#top">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll inactive" href="#section_2">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll inactive" href="#section_3">
                    Causes
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll inactive" href="#section_4">
                    Volunteer
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link click-scroll dropdown-toggle inactive"
                    href="#section_5"
                    id="navbarLightDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    News
                  </a>

                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="navbarLightDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="news.html">
                        News Listing
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="news-detail.html">
                        News Detail
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll inactive" href="#section_6">
                    Contact
                  </a>
                </li>

                <li className="nav-item ms-3">
                  <a
                    className="nav-link custom-btn custom-border-btn btn inactive"
                    href="donate.html"
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Next.js
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/services" className="nav-link">
                  Services
                </Link>
              </li>
            </ul>

           
            {userProfile != null ? (
              <div className="dropdown">
                <a
                  className="btn btn dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userProfile.Fullname}
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">
                      โปร์ไฟล์
                    </a>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      ออกจากระบบ
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="nav-link mx-3">
                <Link href="/login" className="btn btn-primary">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Header;
