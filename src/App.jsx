function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(135deg, #0f5132, #3a3a3a)", // PURE green + gray
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
        <header
          style={{
            width: "100%",
            backgroundColor: "#f4f5f3",       // 🍃 light gray with slight green tone
            padding: "10px 18px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <img
            src="/Logo.png"
            alt="Dreamlands Properties Logo"
            style={{
              height: "42px",
              width: "42px",
              objectFit: "contain"
            }}
          />
          
          <span
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              fontWeight: 600,
              color: "#2b2b2b",               // 🔥 smooth deep gray
              letterSpacing: "0.3px"
            }}
          >
            Dreamlands Properties
          </span>
        </header>

      <main
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",   // <— horizontally centers
            textAlign: "center",        // <— aligns heading to center
            padding: "20px"
          }}
        >
          <div>
          <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 700,
            whiteSpace: "nowrap",
            textShadow:
              "0 0 10px rgba(255,255,255,0.7), 0 0 30px rgba(0,255,100,0.6)",
            animation: "fadeUp 1.8s ease forwards",
            opacity: 0
          }}
        >
          🚧 Website Under Maintenance 🚧
        </h1>

        <style>
        {`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(25px); }
          70% { opacity: 1; transform: translateY(0px); }
          100% { opacity: 1; }
        }
        `}
        </style>


    <p
      style={{
        fontSize: "clamp(1rem, 2vw, 1.3rem)",
        opacity: 0.9,
        marginTop: "10px"
      }}
    >
      We’re upgrading the website for a better experience.
      Please check back soon.
    </p>
  </div>
</main>


      <footer
        style={{
          padding: "10px",
          textAlign: "center",
          fontSize: "clamp(0.75rem, 1.6vw, 0.9rem)",
          opacity: 0.8
        }}
      >
        © {new Date().getFullYear()} Dreamlands Properties. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
