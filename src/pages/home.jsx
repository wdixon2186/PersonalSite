import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const profiles = [
    { name: "About Me", route: "/current", img: "/avatars/Try.png" },
    { name: "Experience", route: "/past", img: "/avatars/Exp.jpg" },
    { name: "Creative Work", route: "/resume", img: "/avatars/Creative.png" },
    { name: "Contact", route: "/contact", img: "/avatars/Contact.jpg" },
  ];

  const alerts = [
    "Please stop.",
    "You weren't supposed to click that.",
    "Seriously?",
    "Can you read?",
    "The good news is one of us can follow directions",
    "You just couldn't resist, could you?",
    "Hope you're happy",
  ];

  const handleManageProfiles = () => {
    const audio = new Audio("/why-did-you-do-that.mp3");
    audio.play();

    const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];

    setTimeout(() => {
      alert(randomAlert);
    }, 200);
  };

  return (
    <div style={styles.page}>
      <style>{css}</style>

      <h1 style={styles.title}>Who's watching?</h1>

      <div style={styles.profilesContainer}>
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="profileCard"
            onClick={() => navigate(profile.route)}
            onKeyDown={(e) => e.key === "Enter" && navigate(profile.route)}
            tabIndex={0}
            role="button"
            aria-label={`Select profile ${profile.name}`}
          >
            <img
              src={profile.img}
              alt={`${profile.name} avatar`}
              className="profileAvatar"
            />
            <div className="profileName">{profile.name}</div>
          </div>
        ))}

        <a
          href="/WD.pdf"
          download="WD.pdf"
          className="addProfileCard"
          aria-label="Download Resume"
        >
          <div style={styles.addCircle}>
            <div style={styles.plusHorizontal}></div>
            <div style={styles.plusVertical}></div>
          </div>

          <div style={styles.addProfileLabel}>Download Resume</div>
        </a>
      </div>

      <button style={styles.manageButton} onClick={handleManageProfiles}>
        Don't Click
      </button>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#141414",
    minHeight: "100vh",
    width: "100vw",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },

  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "40px",
    textAlign: "center",
  },

  profilesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "18px",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
  },

  addCircle: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#9a9a9a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: "20px",
  },

  plusHorizontal: {
    position: "absolute",
    width: "48px",
    height: "10px",
    backgroundColor: "#111",
    borderRadius: "2px",
  },

  plusVertical: {
    position: "absolute",
    width: "10px",
    height: "48px",
    backgroundColor: "#111",
    borderRadius: "2px",
  },

  addProfileLabel: {
    fontSize: "1.1rem",
    color: "#9a9a9a",
    fontWeight: "500",
  },

  manageButton: {
    marginTop: "60px",
    padding: "12px 28px",
    backgroundColor: "transparent",
    color: "#808080",
    border: "1px solid #808080",
    fontSize: "1rem",
    fontWeight: "500",
    letterSpacing: "1px",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "color 0.2s ease, border-color 0.2s ease",
  },
};

const css = `
.profileCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  outline: none;
}

.profileAvatar {
  width: 140px;
  height: 140px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 12px;
  border: 4px solid transparent;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
}

.profileName {
  font-size: 1rem;
  color: #808080;
  font-weight: 500;
  transition: color 0.15s ease;
}

.profileCard:hover .profileAvatar,
.profileCard:focus .profileAvatar,
.profileCard:focus-visible .profileAvatar {
  border-color: #e6e6e6;
}

.profileCard:hover .profileName,
.profileCard:focus .profileName,
.profileCard:focus-visible .profileName {
  color: #ffffff;
}

.profileCard:focus,
.profileCard:focus-visible {
  outline: none;
}

.addProfileCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  outline: none;
  text-decoration: none;
}

.addProfileCard:focus,
.addProfileCard:focus-visible {
  outline: 2px solid white;
  outline-offset: 8px;
}

.manageButton:hover,
.manageButton:focus,
.manageButton:focus-visible {
  color: white;
  border-color: white;
  outline: none;
}
`;

export default Home;