import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Current() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="current-page" style={styles.page}>
      <style>{css}</style>

      <div className="current-background" style={styles.background} />
      <div className="current-overlay" style={styles.overlay} />

      <header className="currentNavbar" style={styles.navbar}>
        <div
          style={styles.logo}
          onClick={() => navigate("/")}
          onKeyDown={(e) => e.key === "Enter" && navigate("/")}
          role="button"
          tabIndex={0}
        >
          Willu
        </div>

        <nav className="currentNavPill current-nav-pill" style={styles.nav}>
          <span style={styles.navItem} onClick={() => navigate("/")}>
            Home
          </span>
          <span style={styles.activeNav} onClick={() => navigate("/current")}>
            About Me
          </span>
          <span style={styles.navItem} onClick={() => navigate("/past")}>
            Experience
          </span>
          <span style={styles.navItem} onClick={() => navigate("/resume")}>
            Creative Work
          </span>
          <span style={styles.navItem} onClick={() => navigate("/contact")}>
            Contact
          </span>
        </nav>
      </header>

      <div className="current-content" style={styles.content}>
        <p className="current-kicker" style={styles.kicker}>
          ABOUT ME
        </p>

        <h1 className="current-title" style={styles.title}>
          <span className="nameLine">WILLIAM</span>
          <span className="nameLine">DIXON</span>
        </h1>

        <div className="current-meta" style={styles.meta}>
          <span style={styles.highlight}>Screenwriter</span>
          <span>•</span>
          <span>Filmmaker</span>
          <span>•</span>
          <span>Storyteller</span>
        </div>

        <p className="current-description" style={styles.description}>
          I am a screenwriter and creative storyteller focused on character,
          driven narratives. Explore my background, experience, and creative
          work through this site.
        </p>

        <div className="current-buttons" style={styles.buttons}>
          <button
            className="current-details-btn"
            style={styles.details}
            onClick={() => setShowDetails(true)}
          >
            DETAILS
          </button>
        </div>
      </div>

      <div
        className="current-panel"
        style={{
          ...styles.detailsPanel,
          transform: showDetails ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <button
          style={styles.closeButton}
          onClick={() => setShowDetails(false)}
          aria-label="Close details panel"
        >
          ×
        </button>

        <h2 className="current-panel-title" style={styles.panelTitle}>
          More About William
        </h2>

        <p className="current-panel-text" style={styles.panelText}>
          Born and raised in Colorado Springs CO, I obtained a Bachelors degree
          in Film Studies from Azusa Pacific University. After I had trouble
          finding work, I ended up moving back home and earned a full stack
          engineering certificate from General Assembly.
        </p>

        <p className="current-panel-text" style={styles.panelText}>
          Upon getting my certification I worked as a Senior Software Associate
          for Infosys, focusing mostly on Data Engineering. After three years, I
          decided to get a masters degree in Screenwriting in hopes to one day
          teach film at the collegiate level.
        </p>

        <p className="current-panel-text" style={styles.panelText}>
          I then attended the American Film Institute Conservatory earning my
          MFA, and leaving with a portfolio of work. Most of which can be found
          on the "Creative Work" tab. If you have any questions please contact
          me! I love coffee and meeting new people.
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    color: "white",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    backgroundColor: "#07131b",
  },

  background: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/AM.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center right",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(5,18,28,0.92) 0%, rgba(5,18,28,0.75) 30%, rgba(0,0,0,0.2) 65%)",
  },

  navbar: {
    position: "fixed",
    top: "24px",
    left: 0,
    right: 0,
    zIndex: 20,
    height: "56px",
    pointerEvents: "none",
  },

  logo: {
    position: "absolute",
    left: "32px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "30px",
    fontWeight: "700",
    color: "#1ce783",
    cursor: "pointer",
    pointerEvents: "auto",
    userSelect: "none",
  },

  nav: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    gap: "34px",
    alignItems: "center",
    padding: "14px 26px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(8px)",
    justifyContent: "center",
    pointerEvents: "auto",
  },

  navItem: {
    color: "rgba(255,255,255,0.78)",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "opacity 0.2s ease, transform 0.2s ease",
    whiteSpace: "nowrap",
  },

  activeNav: {
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "900",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "760px",
    paddingLeft: "80px",
    paddingRight: "32px",
    paddingTop: "200px",
  },

  kicker: {
    fontSize: "14px",
    letterSpacing: "2px",
    color: "#cdeae3",
    marginBottom: "18px",
  },

  title: {
    fontSize: "96px",
    fontWeight: "900",
    margin: 0,
    marginBottom: "20px",
    lineHeight: "0.92",
    fontStyle: "italic",
    display: "flex",
    flexDirection: "column",
  },

  meta: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "20px",
    color: "#d7e0e5",
    flexWrap: "wrap",
  },

  highlight: {
    color: "#8ff0da",
    fontWeight: "700",
  },

  description: {
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "30px",
    color: "#e9eef2",
    maxWidth: "520px",
  },

  buttons: {
    display: "flex",
    gap: "16px",
  },

  details: {
    background: "transparent",
    border: "2px solid white",
    color: "white",
    padding: "12px 26px",
    borderRadius: "6px",
    fontWeight: "700",
    cursor: "pointer",
    letterSpacing: "1px",
  },

  detailsPanel: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "420px",
    maxWidth: "100vw",
    height: "100vh",
    background: "rgba(8, 18, 28, 0.95)",
    backdropFilter: "blur(10px)",
    zIndex: 30,
    padding: "110px 36px 36px 36px",
    boxSizing: "border-box",
    boxShadow: "-10px 0 30px rgba(0,0,0,0.35)",
    transition: "transform 0.35s ease",
    overflowY: "auto",
  },

  closeButton: {
    position: "absolute",
    top: "28px",
    right: "28px",
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "34px",
    cursor: "pointer",
    lineHeight: 1,
  },

  panelTitle: {
    margin: 0,
    marginBottom: "24px",
    fontSize: "32px",
    fontWeight: "700",
  },

  panelText: {
    color: "#d7e0e5",
    fontSize: "17px",
    lineHeight: "1.7",
    marginBottom: "20px",
  },
};

const css = `
body {
  margin: 0;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

.nameLine {
  display: block;
}

@media (max-width: 900px) {
  .currentNavbar {
    top: 16px !important;
    height: 108px !important;
  }

  .currentNavPill {
    left: 50% !important;
    top: 72px !important;
    transform: translateX(-50%) !important;
    width: calc(100vw - 24px) !important;
    max-width: 460px !important;
    padding: 10px 14px !important;
    gap: 14px !important;
    row-gap: 10px !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
  }

  .current-content {
    padding-left: 56px !important;
    padding-top: 190px !important;
    max-width: 620px !important;
  }

  .current-title {
    font-size: 72px !important;
  }

  .current-description {
    font-size: 17px !important;
    max-width: 460px !important;
  }

  .current-panel {
    width: min(420px, 90vw) !important;
  }
}

@media (max-width: 720px) {
  .current-page {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    position: relative !important;
    height: auto !important;
    min-height: 100vh !important;
  }

  .current-background,
  .current-overlay {
    position: fixed !important;
  }

  .currentNavbar {
    top: 16px !important;
    height: 116px !important;
  }

  .currentNavPill {
    left: 50% !important;
    top: 78px !important;
    transform: translateX(-50%) !important;
    width: calc(100vw - 24px) !important;
    max-width: 420px !important;
    padding: 10px 14px !important;
    gap: 12px !important;
    row-gap: 8px !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
  }

  .currentNavPill span {
    font-size: 0.95rem !important;
  }

  .current-content {
    padding-left: 24px !important;
    padding-right: 24px !important;
    padding-top: 190px !important;
    padding-bottom: 40px !important;
    max-width: 100% !important;
  }

  .current-kicker {
    font-size: 12px !important;
    margin-bottom: 14px !important;
  }

  .current-title {
    font-size: 56px !important;
    margin-bottom: 16px !important;
    line-height: 0.92 !important;
    max-width: 100% !important;
  }

  .current-meta {
    gap: 8px !important;
    margin-bottom: 18px !important;
  }

  .current-description {
    font-size: 16px !important;
    line-height: 1.45 !important;
    max-width: 100% !important;
    margin-bottom: 24px !important;
  }

  .current-buttons {
    width: 100%;
  }

  .current-details-btn {
    width: 100%;
    max-width: 220px;
    padding: 12px 20px !important;
  }

  .current-panel {
    width: 100vw !important;
    padding: 104px 24px 28px 24px !important;
  }

  .current-panel-title {
    font-size: 28px !important;
    margin-bottom: 18px !important;
  }

  .current-panel-text {
    font-size: 16px !important;
    line-height: 1.6 !important;
  }
}

@media (max-width: 640px) {
  .currentNavPill {
    gap: 10px !important;
    row-gap: 8px !important;
    padding: 10px 12px !important;
  }

  .currentNavPill span {
    font-size: 0.9rem !important;
  }
}

@media (max-width: 520px) {
  .current-content {
    padding-top: 200px !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .current-title {
    font-size: 44px !important;
  }

  .current-meta {
    font-size: 15px !important;
  }

  .current-description {
    font-size: 15px !important;
  }

  .current-nav-pill {
    max-width: calc(100vw - 20px) !important;
  }
}

@media (max-width: 420px) {
  .current-title {
    font-size: 38px !important;
  }

  .current-description {
    font-size: 14px !important;
    line-height: 1.5 !important;
  }

  .current-details-btn {
    max-width: 100% !important;
  }
}
`;

export default Current;