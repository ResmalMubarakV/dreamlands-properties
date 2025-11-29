function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(135deg, #0f5132, #3a3a3a)",
        color: "#ffffff",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Topbar */}
      <header
        style={{
          width: "100%",
          backgroundColor: "#f4f5f3",
          padding: "10px 16px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.18)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",          // ✅ lets it adapt on mobile
          justifyContent: "flex-start",
        }}
      >
        <img
          src="/Logo.png"
          alt="Dreamlands Properties Logo"
          style={{
            height: "40px",
            width: "40px",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 600,
              color: "#2b2b2b",       // dark gray text
            }}
          >
            Dreamlands Properties
          </span>
          <span
            style={{
              fontSize: "clamp(0.75rem, 1.7vw, 0.9rem)",
              color: "#4a4a4a",
              opacity: 0.85,
            }}
          >
            Curating better spaces for you
          </span>
        </div>
      </header>

      {/* Center Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 16px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "640px",
            textAlign: "center",
            padding: "20px 16px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
              fontWeight: 700,
              marginBottom: "12px",
              // no whiteSpace: nowrap -> ✅ allows mobile to wrap instead of overflow
            }}
          >
            🚧 Website Under Maintenance 🚧
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              lineHeight: 1.5,
              opacity: 0.95,
              marginBottom: "8px",
            }}
          >
            We’re currently upgrading the Dreamlands Properties website to offer
            a smoother and improved browsing experience.
          </p>

          <p
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              opacity: 0.9,
            }}
          >
            Thank you for your patience — we’ll be back online soon.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          padding: "10px 16px 14px",
          textAlign: "center",
          fontSize: "clamp(0.75rem, 1.6vw, 0.9rem)",
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} Dreamlands Properties. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
