import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Resume() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const videoProjects = [
    {
      title: "SILENT",
      badge: "Play",
      image: "/past-posters/SilentPoster.png",
      type: "video",
      videoType: "vimeo-password",
      videoUrl: "https://vimeo.com/952476935",
      password: "Cycle_2024",
      year: "Video",
      genre: "Short Film",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "THE COMMENTATOR",
      badge: "Play",
      image: "/past-posters/TheCommentatorPoster.png",
      type: "video",
      videoType: "vimeo-password",
      videoUrl: "https://vimeo.com/916054727",
      password: "Cycle_2024",
      year: "Video",
      genre: "Short Film",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      title: "STROMBOLI",
      badge: "Play",
      image: "/past-posters/Stromboli.png",
      type: "video",
      videoType: "vimeo-password",
      videoUrl: "https://vimeo.com/911733364?fl=pl&fe=cm",
      password: "Cycle_2024",
      year: "Video",
      genre: "Short Film",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      title: "LAST WORDS",
      badge: "Play",
      image: "/past-posters/LastWordsPoster.png",
      type: "video",
      videoType: "youtube",
      videoUrl: "https://www.youtube.com/watch?v=Sl-TaFWsEqQ",
      year: "Video",
      genre: "Short Film",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      title: "BARE ASSETS",
      badge: "Play",
      image: "/past-posters/BareAssetsPoster.png",
      type: "video",
      videoType: "youtube",
      videoUrl: "https://www.youtube.com/watch?v=4qh4XnYNH2M",
      year: "Video",
      genre: "Short Film",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ];

  const screenplayProjects = [
    {
      title: "LUCID",
      badge: "Screenplay",
      image: "/past-posters/Lucid.png",
      type: "logline",
      year: "Screenplay",
      genre: "Feature Sci-Fi/ Horror",
      description:
        "After her titan of a father retires, aspiring Psychologist, Samantha, hopes to establish her reputation by becoming the first person to enter a child’s dream and uncover repressed memories. While inside the dream, however, she discovers the source of the child’s trauma is not what she expected, and rather something from Samantha’s own past.",
    },
    {
      title: "ALTAR EGOS",
      badge: "Screenplay",
      image: "/past-posters/AltarEgos.png",
      type: "logline",
      year: "Screenplay",
      genre: "Comedy Pilot",
      description:
        "A by the book pastor’s already shaky faith takes a nosedive when his smooth-talking, scam-happy brother rolls back into their one Walmart town after a seven-year absence. As the pastor’s pews and tithing baskets remain emptier than a Republican book club, and his brother’s slimy ways win people over, the pastor starts to wonder if he chose the wrong career or the wrong God.",
    },
    {
      title: "COUNTER PICK",
      badge: "Screenplay",
      image: "/past-posters/CounterPick.png",
      type: "logline",
      year: "Screenplay",
      genre: "Feature / Dramedy",
      description:
        "A gifted but aimless gamer and his overworked ex-best friend reunite to chase a new career in the streaming industry. But as adulthood crashes in through an unexpected pregnancy and a life-changing job offer, their fragile friendship becomes a reckoning with who they were, who they are, and how far apart those things have grown.",
    },
    {
      title: "SAWNEY",
      badge: "Screenplay",
      image: "/past-posters/Sawney.png",
      type: "logline",
      year: "Screenplay",
      genre: "Feature / Horror",
      description:
        "In 1500s Scotland, a frightened teenage deserter runs from battle straight into the cave of the legendary cannibal Sawney Bean, forcing him to confront the monster he fears—and the cowardice he cannot outrun.",
    },
    {
      title: "SATURN",
      badge: "Screenplay",
      image: "/past-posters/Saturn.png",
      type: "logline",
      year: "Screenplay",
      genre: "Feature / Drama",
      description:
        "A single mother finds herself pressured to take care of her aging parents despite her own life passing her by.",
    },
    {
      title: "THE MUSICIAN",
      badge: "Screenplay",
      image: "/past-posters/The Musician.png",
      type: "logline",
      year: "Screenplay",
      genre: "Feature / Western",
      description:
        "A soft and sensitive cowboy embarks on a revenge odyssey to kill the hardened men who murdered his father.",
    },
  ];

  const comicBookProjects = [
    {
      title: "SAVAGES",
      badge: "Comic Book",
      image: "/past-posters/Savages_.jpg",
      type: "logline",
      year: "Comic Book",
      genre: "Graphic Storytelling",
      description: "A visual comic about the savagery of man.",
    },
  ];

  const saturnProject =
    screenplayProjects.find((project) => project.title === "SATURN") ||
    screenplayProjects[0];

  const getYouTubeEmbedUrl = (url) => {
    try {
      const parsed = new URL(url);
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : "";
    } catch {
      return "";
    }
  };

  const renderCard = (item, index) => (
    <div
      key={`${item.title}-${index}`}
      className="posterCard"
      onClick={() => setSelectedItem(item)}
      onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
      tabIndex={0}
      role="button"
      aria-label={`Open ${item.title}`}
    >
      {item.badge && <div className="posterBadge">{item.badge}</div>}
      <img src={item.image} alt={item.title} className="posterImage" />
      <div className="posterMenu">⋮</div>
      <div className="posterFooter">
        <div className="posterTitleSmall">{item.title}</div>
        {item.type === "video" && <div className="playLabel">▶ Play</div>}
      </div>
    </div>
  );

  const renderVideoContent = (item) => {
    if (item.videoType === "youtube") {
      return (
        <div style={styles.videoEmbedWrap}>
          <iframe
            src={getYouTubeEmbedUrl(item.videoUrl)}
            title={item.title}
            style={styles.videoEmbed}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    if (item.videoType === "vimeo-password") {
      return (
        <div style={styles.externalVideoBox}>
          <h4 style={styles.loglineHeading}>Open Video</h4>
          <p style={styles.loglineText}>
            This Vimeo link is password protected, so it is safest to open it in
            a new tab.
          </p>
          <p style={styles.passwordText}>
            Password: <strong>{item.password}</strong>
          </p>
          <a
            href={item.videoUrl}
            target="_blank"
            rel="noreferrer"
            style={styles.externalButton}
          >
            Open {item.title}
          </a>
        </div>
      );
    }

    return (
      <div style={styles.externalVideoBox}>
        <h4 style={styles.loglineHeading}>Video Link Needed</h4>
        <p style={styles.loglineText}>
          A video link has not been added for this title yet.
        </p>
      </div>
    );
  };

  return (
    <div style={styles.page}>
      <style>{css}</style>

      <header className="resumeNavbar" style={styles.navbar}>
        <div
          className="resumeBrand"
          style={styles.brand}
          onClick={() => navigate("/")}
        >
          <div className="resumeBrandTop" style={styles.brandTop}>
            WillBO
          </div>
          <div className="resumeBrandBottom" style={styles.brandBottom}>
            max
          </div>
        </div>

        <nav className="resumeNavPill" style={styles.nav}>
          <span style={styles.navItem} onClick={() => navigate("/")}>
            Home
          </span>
          <span style={styles.navItem} onClick={() => navigate("/current")}>
            About Me
          </span>
          <span style={styles.navItem} onClick={() => navigate("/past")}>
            Experience
          </span>
          <span style={styles.activeNav} onClick={() => navigate("/resume")}>
            Creative Work
          </span>
          <span style={styles.navItem} onClick={() => navigate("/contact")}>
            Contact
          </span>
        </nav>
      </header>

      <section style={styles.heroSection}>
        <div
          style={{
            ...styles.heroBackground,
            backgroundImage: `url('${saturnProject.image}')`,
          }}
        />
        <div style={styles.heroOverlay} />
        <div style={styles.heroBottomFade} />

        <div style={styles.heroContent}>
          <div style={styles.heroEyebrow}>Currently Working On</div>
          <h1 style={styles.heroTitle}>{saturnProject.title}</h1>
          <div style={styles.heroMeta}>
            <span>{saturnProject.year}</span>
            <span>•</span>
            <span>{saturnProject.genre}</span>
          </div>
          <button
            type="button"
            style={styles.heroButton}
            onClick={() => setSelectedItem(saturnProject)}
          >
            Details
          </button>
        </div>
      </section>

      <div style={styles.pageContent}>
        <section style={styles.rowSection}>
          <h2 style={styles.rowTitle}>Video Projects</h2>
          <div className="posterRow">{videoProjects.map(renderCard)}</div>
        </section>

        <section style={styles.rowSection}>
          <h2 style={styles.rowTitle}>Screenplays</h2>
          <div className="posterRow">{screenplayProjects.map(renderCard)}</div>
        </section>

        <section style={styles.rowSection}>
          <h2 style={styles.rowTitle}>Comic Book</h2>
          <div className="posterRow">{comicBookProjects.map(renderCard)}</div>
        </section>
      </div>

      {selectedItem && (
        <div style={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedItem(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div style={styles.modalInner}>
              <div style={styles.modalPosterWrap}>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  style={styles.modalPoster}
                />
              </div>

              <div style={styles.modalContent}>
                <h3 style={styles.modalTitle}>{selectedItem.title}</h3>

                <div style={styles.modalMeta}>
                  <span style={styles.modalMetaHighlight}>
                    {selectedItem.year}
                  </span>
                  <span>•</span>
                  <span>{selectedItem.genre}</span>
                </div>

                {selectedItem.type === "video" ? (
                  renderVideoContent(selectedItem)
                ) : (
                  <div style={styles.loglineBox}>
                    <h4 style={styles.loglineHeading}>Logline / Details</h4>
                    <p style={styles.loglineText}>{selectedItem.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "white",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    paddingBottom: "40px",
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

  brand: {
    position: "absolute",
    left: "32px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    cursor: "pointer",
    color: "#ffffff",
    lineHeight: 0.8,
    userSelect: "none",
    filter: "drop-shadow(0 0 10px rgba(255,255,255,0.08))",
    pointerEvents: "auto",
  },

  brandTop: {
    fontSize: "39px",
    fontWeight: "900",
    letterSpacing: "-2.4px",
    fontFamily: "'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    color: "#ffffff",
    textShadow:
      "0 0 1px rgba(255,255,255,0.9), 0 0 14px rgba(255,255,255,0.07)",
  },

  brandBottom: {
    fontSize: "37px",
    fontWeight: "800",
    letterSpacing: "-1.9px",
    fontFamily: "'Trebuchet MS', 'Verdana', 'Helvetica Neue', sans-serif",
    textTransform: "lowercase",
    marginTop: "-5px",
    color: "#ffffff",
    textShadow:
      "0 0 1px rgba(255,255,255,0.85), 0 0 16px rgba(255,255,255,0.06)",
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

  heroSection: {
    position: "relative",
    minHeight: "520px",
    height: "72vh",
    maxHeight: "760px",
    overflow: "hidden",
    marginBottom: "22px",
  },

  heroBackground: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 30%",
    backgroundRepeat: "no-repeat",
    transform: "scale(1.02)",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.62) 34%, rgba(0,0,0,0.18) 68%, rgba(0,0,0,0.3) 100%)",
  },

  heroBottomFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "180px",
    background:
      "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0) 100%)",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    maxWidth: "680px",
    padding: "120px 32px 52px 32px",
    boxSizing: "border-box",
  },

  heroEyebrow: {
    fontSize: "16px",
    fontWeight: "700",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.86)",
    marginBottom: "14px",
  },

  heroTitle: {
    margin: 0,
    fontSize: "clamp(3.2rem, 8vw, 6rem)",
    fontWeight: "900",
    lineHeight: 0.95,
    letterSpacing: "-2px",
    textTransform: "uppercase",
    textShadow: "0 8px 30px rgba(0,0,0,0.55)",
  },

  heroMeta: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "rgba(255,255,255,0.9)",
    fontSize: "18px",
    fontWeight: "500",
    marginTop: "16px",
    marginBottom: "26px",
    flexWrap: "wrap",
  },

  heroButton: {
    border: "none",
    borderRadius: "10px",
    padding: "14px 28px",
    background: "#ffffff",
    color: "#111",
    fontSize: "18px",
    fontWeight: "800",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  pageContent: {
    padding: "0 32px",
  },

  rowSection: {
    marginTop: "10px",
    marginBottom: "28px",
  },

  rowTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "14px",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    padding: "24px",
  },

  modal: {
    width: "min(1100px, 94vw)",
    maxHeight: "88vh",
    overflowY: "auto",
    background: "#0b0b0b",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
    position: "relative",
  },

  closeButton: {
    position: "absolute",
    top: "18px",
    right: "18px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(255,255,255,0.12)",
    color: "white",
    fontSize: "28px",
    cursor: "pointer",
    zIndex: 1,
  },

  modalInner: {
    display: "flex",
    gap: "28px",
    padding: "32px",
    flexWrap: "wrap",
  },

  modalPosterWrap: {
    flex: "0 0 280px",
  },

  modalPoster: {
    width: "100%",
    maxWidth: "280px",
    borderRadius: "10px",
    objectFit: "cover",
    display: "block",
  },

  modalContent: {
    flex: "1 1 520px",
    minWidth: 0,
  },

  modalTitle: {
    marginTop: 0,
    marginBottom: "10px",
    fontSize: "36px",
    fontWeight: "800",
  },

  modalMeta: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#d7d7d7",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  modalMetaHighlight: {
    color: "#6ef0d0",
    fontWeight: "700",
  },

  videoEmbedWrap: {
    width: "100%",
    aspectRatio: "16 / 9",
    backgroundColor: "black",
    borderRadius: "12px",
    overflow: "hidden",
  },

  videoEmbed: {
    width: "100%",
    height: "100%",
    border: "none",
    display: "block",
  },

  externalVideoBox: {
    background: "#121212",
    borderRadius: "12px",
    padding: "20px",
  },

  externalButton: {
    display: "inline-block",
    marginTop: "14px",
    padding: "12px 18px",
    borderRadius: "999px",
    background: "#ffffff",
    color: "#111",
    textDecoration: "none",
    fontWeight: "700",
  },

  passwordText: {
    marginTop: "12px",
    marginBottom: 0,
    color: "#e0e0e0",
    fontSize: "16px",
  },

  loglineBox: {
    background: "#121212",
    borderRadius: "12px",
    padding: "20px",
  },

  loglineHeading: {
    marginTop: 0,
    marginBottom: "10px",
    fontSize: "20px",
  },

  loglineText: {
    margin: 0,
    color: "#e0e0e0",
    lineHeight: 1.6,
    fontSize: "17px",
  },
};

const css = `
body {
  margin: 0;
  background: #000;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

.posterRow {
  display: flex;
  gap: 22px;
  overflow: visible;
  padding-bottom: 8px;
  flex-wrap: wrap;
}

.posterCard {
  position: relative;
  width: calc(20% - 18px);
  min-width: 0;
  height: 390px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  outline: none;
}

.posterCard:hover,
.posterCard:focus-visible {
  transform: scale(1.03);
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.posterImage {
  width: 100%;
  height: 352px;
  object-fit: cover;
  display: block;
  border-radius: 0;
}

.posterBadge {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  color: #111;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 10px;
  z-index: 1;
}

.posterMenu {
  position: absolute;
  top: 8px;
  right: 10px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  text-shadow: 0 2px 6px rgba(0,0,0,0.6);
}

.posterFooter {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 8px;
}

.posterTitleSmall {
  font-size: 13px;
  font-weight: 700;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.playLabel {
  font-size: 13px;
  font-weight: 700;
  color: #6ef0d0;
  white-space: nowrap;
}

@media (max-width: 1200px) {
  .posterCard {
    width: calc(25% - 17px);
    height: 360px;
  }

  .posterImage {
    height: 322px;
  }
}

@media (max-width: 900px) {
  .posterCard {
    width: calc(33.333% - 15px);
    height: 320px;
  }

  .posterImage {
    height: 282px;
  }
}

@media (max-width: 720px) {
  .resumeNavbar {
    top: 16px !important;
    height: 96px !important;
  }

  .resumeBrand {
    left: 16px !important;
    top: 10px !important;
    transform: none !important;
  }

  .resumeBrandTop {
    font-size: 28px !important;
    letter-spacing: -1.6px !important;
  }

  .resumeBrandBottom {
    font-size: 27px !important;
    letter-spacing: -1.2px !important;
    margin-top: -4px !important;
  }

  .resumeNavPill {
    left: 50% !important;
    top: 64px !important;
    transform: translateX(-50%) !important;
    width: calc(100vw - 24px) !important;
    max-width: 420px !important;
    padding: 10px 14px !important;
    gap: 14px !important;
    row-gap: 10px !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
  }

  .posterRow {
    gap: 14px;
  }

  .posterCard {
    width: calc(50% - 7px);
    height: auto;
  }

  .posterImage {
    height: 240px;
  }

  .posterFooter {
    min-height: 38px;
    height: auto;
    align-items: flex-start;
    padding-top: 8px;
  }

  .posterTitleSmall,
  .playLabel {
    font-size: 12px;
  }
}

@media (max-width: 520px) {
  .resumeNavPill {
    gap: 10px !important;
    row-gap: 8px !important;
    padding: 10px 12px !important;
  }

  .posterCard {
    width: 100%;
  }

  .posterImage {
    height: auto;
    aspect-ratio: 2 / 3;
  }
}
`;

export default Resume;