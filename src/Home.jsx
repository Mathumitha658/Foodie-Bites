import About from "./About";
import Meals from "./Meals";
import NonVeg from "./NonVeg";
import SpecialCombo from "./SpecialCombo";
import TrendingRecipes from "./TrendingRecipes";
import Veg from "./Veg";

const Home = () => {
  return (
    <>
    <div
      className="container-fluid d-flex align-items-center"
      style={{
        minHeight: "100vh",
        marginTop: "90px",   // 👈 HEADER HEIGHT GAP
        background: "linear-gradient(120deg, #fff3e6, #fde2c8)",
      }}
    >
      <div className="row w-100 align-items-center px-5">
        
        {/* LEFT CONTENT */}
        <div className="col-md-6">
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#7a3e1d",
            }}
          >
            Delicious Food <br /> Delivered to You 🍽️
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#5a3a1b",
              marginTop: "20px",
              lineHeight: "1.6",
            }}
          >
            Enjoy mouth-watering dishes made with fresh ingredients.
            Get exciting offers only on <b>Foodie Bites</b>.
          </p>

          <div className="d-flex gap-3 mt-4">
            <button
              className="btn"
              style={{
                backgroundColor: "#b87333",
                color: "white",
                padding: "10px 25px",
                borderRadius: "25px",
                fontWeight: "600",
              }}
            >
              Order Now
            </button>

            <button
              className="btn btn-outline-dark"
              style={{
                padding: "10px 25px",
                borderRadius: "25px",
              }}
            >
              View Menu
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src="/wholefood.avif"
            alt="Delicious Food"
            style={{
              width: "85%",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </div>
    </div>
    <About/>
    <Meals/>
    <Veg/>
    <NonVeg/>
    <SpecialCombo/>
    <TrendingRecipes/>
    </>
  );
};

export default Home;
