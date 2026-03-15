import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const navBtn = {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    textDecoration: "none"
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        .header-wrapper {
          position: sticky;
          top: 0;
          zIndex: 1000;
          width: 100%;
          background: linear-gradient(90deg, #c27a48, #d4a373);
          box-shadow: 0 6px 16px rgba(0,0,0,0.25);
          font-family: Arial, sans-serif;
          z-index: 1000;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          height: 75px;
        }

        .header-logo {
          color: #fff;
          font-size: 26px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
        }

        .header-nav {
          display: flex;
          gap: 25px;
          align-items: center;
          position: relative;
        }

        .header-right {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 3px;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: linear-gradient(90deg, #c27a48, #d4a373);
          padding: 16px 24px;
          gap: 14px;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu a,
        .mobile-menu button {
          color: #fff;
          font-size: 16px;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 4px 0;
        }

        .mobile-menu .mobile-sub {
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-menu .mobile-sub a {
          color: #fff3e0;
          font-size: 15px;
        }

        .mobile-right {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          padding: 8px 0 4px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .header-inner {
            padding: 0 20px;
          }

          .header-nav {
            display: none;
          }

          .header-right {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>

      <header className="header-wrapper">
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="header-logo">Foodie Bites</Link>

          {/* Desktop Navigation */}
          <div className="header-nav">
            <Link to="/about" style={navBtn}>About</Link>

            {/* Menu Dropdown */}
            <div style={{ position: "relative" }}>
              <button style={navBtn} onClick={() => setMenuOpen(!menuOpen)}>Menu ▼</button>

              {menuOpen && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#fff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    borderRadius: "8px",
                    listStyle: "none",
                    padding: "5px 0",
                    margin: 0,
                    minWidth: "180px",
                    zIndex: 1000
                  }}
                >
                  {[
                    { name: "Meals", path: "/meals" },
                    { name: "Trending Recipes", path: "/trending" },
                    { name: "Desserts", path: "/desserts" },
                    { name: "Quick Bites", path: "/quick-bites" },
                    { name: "Chicken Mania", path: "/chicken-mania" }
                  ].map((item, i) => (
                    <Link key={i} to={item.path} style={{ textDecoration: "none" }}>
                      <li
                        style={{
                          padding: "10px 20px",
                          cursor: "pointer",
                          color: "#6b3e1d",
                          fontWeight: "500"
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f2d9b3")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                      >
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>

            <Link to="/order" style={navBtn}>Order</Link>
            <button style={navBtn} onClick={scrollToFooter}>Contact</button>
          </div>

          {/* Desktop Right Buttons */}
          <div className="header-right">
            <Link to="/login" className="btn bg-white rounded-pill px-4 text-warning">Login</Link>
            <Link to="/register" className="btn bg-white rounded-pill px-4 text-warning">Register</Link>
            <button className="btn btn-outline-light rounded-circle" onClick={() => navigate("/cart")}>🛒</button>
          </div>

          {/* Hamburger Button (mobile only) */}
          <button className="hamburger" onClick={() => setNavOpen(!navOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${navOpen ? "open" : ""}`}>
          <Link to="/about" onClick={() => setNavOpen(false)}>About</Link>

          <div>
            <button
              style={{ color: "#fff", background: "none", border: "none", cursor: "pointer", fontSize: "16px", padding: "4px 0" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Menu ▼
            </button>
            {menuOpen && (
              <div className="mobile-sub">
                {[
                  { name: "Meals", path: "/meals" },
                  { name: "Trending Recipes", path: "/trending" },
                  { name: "Desserts", path: "/desserts" },
                  { name: "Quick Bites", path: "/quick-bites" },
                  { name: "Chicken Mania", path: "/chicken-mania" }
                ].map((item, i) => (
                  <Link key={i} to={item.path} onClick={() => setNavOpen(false)}>{item.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/order" onClick={() => setNavOpen(false)}>Order</Link>
          <button onClick={() => { scrollToFooter(); setNavOpen(false); }} style={{ color: "#fff", background: "none", border: "none", cursor: "pointer", fontSize: "16px", padding: "4px 0", textAlign: "left" }}>Contact</button>

          <div className="mobile-right">
            <Link to="/login" className="btn bg-white rounded-pill px-4 text-warning" onClick={() => setNavOpen(false)}>Login</Link>
            <Link to="/register" className="btn bg-white rounded-pill px-4 text-warning" onClick={() => setNavOpen(false)}>Register</Link>
            <button className="btn btn-outline-light rounded-circle" onClick={() => { navigate("/cart"); setNavOpen(false); }}>🛒</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;