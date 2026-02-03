import React from "react";

const About = () => {
  const points = [
    {
      title: "Quality You Can Taste",
      text:
      "At Foodie Bites, you’ll find quality food that exceeds your expectations. We use fresh ingredients, follow perfect recipes, and maintain hygienic cooking practices."

    },
    {
      title: "Fresh Ingredients",
      text:
"We cook using daily fresh vegetables, premium meats, and hand-picked spices. Freshness is our biggest strength."
   },
    {
      title: "Taste That Stands Out",
      text:
"We blend trending recipes with traditional flavors to create an unforgettable taste."
    },
    {
      title: "Clean & Hygienic",
      text:
"We give great importance to kitchen cleanliness, food safety, and hygiene standards."
   },
    {
      title: "Fast & Reliable Service",
      text:
        " Quick preparation, safe packing, and on-time delivery — your food always reaches you fresh."
    }
  ];

  return (
    <div
      style={{
        padding: "70px 20px",
        maxWidth: "1200px",
        margin: "auto",
        fontFamily: "Poppins, Arial, sans-serif"
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "700",
            background: "linear-gradient(90deg, #b87333, #ffd700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeDown 1s ease"
          }}
        >
          ABOUT FOODIE BITES
        </h1>
        <p style={{ color: "#666", marginTop: "12px", fontSize: "16px" }}>
          Where quality food, fresh ingredients, and amazing taste come together
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          gap: "50px",
          alignItems: "flex-start",
          flexWrap: "wrap"
        }}
      >
        {/* Left Content */}
        <div style={{ flex: "1.2", minWidth: "280px" }}>
          {points.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "16px",
                marginBottom: "30px",
                boxShadow: "0 10px 25px rgba(184,115,51,0.15)",
                borderLeft: "5px solid #b87333",
                animation: "fadeUp 0.8s ease"
              }}
            >
              <h2 style={{ marginBottom: "10px", color: "#333" }}>
                {item.title}
              </h2>
              <p style={{ color: "#555", lineHeight: "1.8" }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            position: "sticky",
            top: "120px"
          }}
        >
          <img
            src="/allfoods.avif"
            alt="Foodie Bites"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.25)"
            }}
          />
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
