import Logo from "./assets/Logo.png";

function App() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #0f5132, #3a3a3a)", // green → gray mix
      color: "white",
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }}>

      {/* Topbar */}
      <div style={{
        width: "100%",
        height: "75px",
        background: "#000", // black header — logo pops clearly here
        display: "flex",
        alignItems: "center",
        padding: "0 30px",
        gap: "15px",
        position: "absolute",
        top: 0,
        left: 0,
        boxShadow: "0px 3px 15px rgba(0,0,0,0.4)"
      }}>
        <img 
          src={Logo}
          alt="Logo"
          style={{
            height: "50px",
            width: "50px",
            objectFit: "contain"
          }}
        />
        <h1 style={{
          fontSize: "1.7rem",
          margin: 0,
          fontWeight: "600",
          letterSpacing: "0.5px"
        }}>
          Dreamlands Properties
        </h1>
      </div>

      {/* Center Content */}
      <div style={{
        marginTop: "80px", // pushing content below header
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "10px" }}>
          🚧 Website Under Maintenance
        </h2>
        <p style={{ fontSize: "1.3rem", opacity: 0.9 }}>
          We’re improving your experience.<br/>
          Please visit again soon.
        </p>
      </div>

    </div>
  );
}

export default App;
