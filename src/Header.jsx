import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const navBtn = {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    textDecoration: "none"
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        height: "75px",
        background: "linear-gradient(90deg, #c27a48, #d4a373)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 60px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ color: "#fff", fontSize: "26px", fontWeight: "700", textDecoration: "none" }}>
        Foodie Bites
      </Link>

      {/* Navigation */}
      <div style={{ display: "flex", gap: "25px", alignItems: "center", position: "relative" }}>
        <Link to="/about" style={navBtn}>About</Link>

        {/* Menu Dropdown */}
        <div style={{ position: "relative" }}>
          <button style={navBtn} onClick={() => setMenuOpen(!menuOpen)}>
            Menu ▼
          </button>

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
    <Link
      key={i}
      to={item.path}
      style={{ textDecoration: "none" }}
    >
      <li
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          color: "#6b3e1d",
          fontWeight: "500"
        }}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = "#f2d9b3")
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = "transparent")
        }
      >
        {item.name}
      </li>
    </Link>
  ))}
</ul>
          )}
        </div>

        <Link to="/order" style={navBtn}>Order</Link>
        <Link to="/contact" style={navBtn}>Contact</Link>
      </div>

      {/* Right Buttons */}
      <div style={{ display: "flex", gap: "12px" }}>
        <Link to="/login" className="btn bg-white rounded-pill px-4 text-warning">
          Login
        </Link>
        <Link to="/register" className="btn bg-white rounded-pill px-4 text-warning">
          Register
        </Link>
<button
  className="btn btn-outline-light rounded-circle"
  onClick={() => navigate("/cart")}
>
  🛒
</button>
      </div>
    </header>
  );
};

export default Header;
