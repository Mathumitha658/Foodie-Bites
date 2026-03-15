import About from "./About";
import Meals from "./Meals";
import NonVeg from "./NonVeg";
import SpecialCombo from "./SpecialCombo";
import TrendingRecipes from "./TrendingRecipes";
import Veg from "./Veg";

const Home = () => {
  return (
    <>
      <style>{`
        .home-hero {
          min-height: 100vh;
          margin-top: 90px;
          background: linear-gradient(120deg, #fff3e6, #fde2c8);
          display: flex;
          align-items: center;
          overflow-x: hidden;
        }

        .home-row {
          width: 100%;
          padding: 0 60px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .home-left {
          flex: 1 1 300px;
          padding: 20px 0;
        }

        .home-left h1 {
          font-size: 48px;
          font-weight: 700;
          color: #7a3e1d;
        }

        .home-left p {
          font-size: 18px;
          color: #5a3a1b;
          margin-top: 20px;
          line-height: 1.6;
        }

        .home-buttons {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .home-right {
          flex: 1 1 300px;
          text-align: center;
          padding: 20px 0;
        }

        .home-right img {
          width: 85%;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
          max-width: 100%;
        }

        @media (max-width: 768px) {
          .home-hero {
            margin-top: 0px;
            min-height: auto;
            padding: 30px 0;
          }

          .home-row {
            padding: 0 20px;
            flex-direction: column;
          }

          .home-left h1 {
            font-size: 30px;
          }

          .home-left p {
            font-size: 15px;
          }

          .home-right img {
            width: 100%;
            margin-top: 20px;
          }
        }
      `}</style>

      <div className="home-hero">
        <div className="home-row">

          {/* LEFT CONTENT */}
          <div className="home-left">
            <h1>
              Delicious Food <br /> Delivered to You 🍽️
            </h1>

            <p>
              Enjoy mouth-watering dishes made with fresh ingredients.
              Get exciting offers only on <b>Foodie Bites</b>.
            </p>

            <div className="home-buttons">
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
          <div className="home-right">
            <img
              src="/wholefood.avif"
              alt="Delicious Food"
            />
          </div>

        </div>
      </div>

      <About />
      <Meals />
      <Veg />
      <NonVeg />
      <SpecialCombo />
      <TrendingRecipes />
    </>
  );
};

export default Home;