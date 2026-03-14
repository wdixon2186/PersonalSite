import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.page}>
      <style>{css}</style>

      <header className="contactNavbar" style={styles.navbar}>
        <nav className="contactNavPill" style={styles.nav}>
          <span style={styles.navItem} onClick={() => navigate("/")}>
            Home
          </span>
          <span style={styles.navItem} onClick={() => navigate("/current")}>
            About Me
          </span>
          <span style={styles.navItem} onClick={() => navigate("/past")}>
            Experience
          </span>
          <span style={styles.navItem} onClick={() => navigate("/resume")}>
            Creative Work
          </span>
          <span style={styles.activeNav} onClick={() => navigate("/contact")}>
            Contact
          </span>
        </nav>
      </header>

      <div style={styles.centerStage}>
        <button
          type="button"
          style={styles.posterButton}
          onClick={() => setIsOpen(true)}
          aria-label="Open contact poster"
        >
          <img
            src="/ContactNew.jpeg"
            alt="William Dixon contact poster"
            style={styles.posterImage}
          />
        </button>
      </div>

      {isOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <button
            type="button"
            style={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close poster"
          >
            ×
          </button>

          <div style={styles.modalInner} onClick={(e) => e.stopPropagation()}>
            <img
              src="/ContactNew.jpeg"
              alt="William Dixon contact poster enlarged"
              style={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    position: "relative",
    overflowX: "hidden",
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

  centerStage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 24px 40px",
    boxSizing: "border-box",
  },

  posterButton: {
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    borderRadius: "18px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    display: "block",
    maxWidth: "min(500px, 90vw)",
    width: "100%",
  },

  posterImage: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "18px",
    objectFit: "contain",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.92)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "28px",
    boxSizing: "border-box",
  },

  modalInner: {
    maxWidth: "min(700px, 92vw)",
    maxHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  modalImage: {
    maxWidth: "100%",
    maxHeight: "90vh",
    width: "auto",
    height: "auto",
    display: "block",
    objectFit: "contain",
    borderRadius: "18px",
    boxShadow: "0 30px 90px rgba(0,0,0,0.7)",
  },

  closeButton: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 101,
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: "30px",
    lineHeight: 1,
    cursor: "pointer",
  },
};

const css = `
body {
  margin: 0;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

@media (max-width: 900px) {
  .contactNavbar {
    top: 16px !important;
    height: 108px !important;
  }

  .contactNavPill {
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
}

@media (max-width: 720px) {
  .contactNavbar {
    top: 16px !important;
    height: 116px !important;
  }

  .contactNavPill {
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

  .contactNavPill span {
    font-size: 0.95rem !important;
  }
}

@media (max-width: 640px) {
  .contactNavPill {
    gap: 10px !important;
    row-gap: 8px !important;
    padding: 10px 12px !important;
  }

  .contactNavPill span {
    font-size: 0.9rem !important;
  }
}

@media (max-width: 520px) {
  .contactNavPill {
    max-width: calc(100vw - 20px) !important;
  }

  .contactNavPill span {
    font-size: 0.88rem !important;
  }
}
`;

export default Contact;