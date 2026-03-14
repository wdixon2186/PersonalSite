import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Past() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Breakdown Express",
      image: "/past-cards/ActorsAccess.png",
      category: "Customer Service",
      year: "2025",
      length: "Representative",
      description:
        "Assisted actors, casting directors, and talent representatives by answering calls, chats, and emails while helping users navigate the platform.",
    },
    {
      id: 2,
      title: "A Higher Standard",
      image: "/past-cards/AHigherStandard.jpg",
      category: "Film Development",
      year: "2025",
      length: "Intern",
      description:
        "Coordinated schedules, calls, and travel for development executives, ensuring efficient daily operations. Assisted with pitch material preparation, talent research, and project tracking. Delivered 30+ detailed script coverages with actionable notes, supporting greenlight and acquisition decisions. Worked as a film development intern supporting project tracking, script coverage, research, and creative development tasks across active projects.",
    },
    {
      id: 3,
      title: "American Film Institute",
      image: "/past-cards/AmericanFilmInstitute.jpg",
      category: "Education",
      year: "2025",
      length: "Teaching Assistant",
      description:
        "Supported students through workshops, written feedback, and class discussion while helping guide story structure and character development.",
    },
    {
      id: 4,
      title: "Ghost House Pictures",
      image: "/past-cards/gh.jpeg",
      category: "Development",
      year: "2024",
      length: "Intern",
      description:
        "Provided script coverage and notes on 30+ feature submissions, focusing on pacing, structure, and market potential. Attended meetings, took notes, and organized materials for development executives. Assisted in festival submissions, screenings, and project tracking.",
    },
    {
      id: 5,
      title: "Infosys",
      image: "/past-cards/Infosys.png",
      category: "Engineering",
      year: "2020-2023",
      length: "Senior Software Engineer",
      description:
        "Led cross-functional teams in delivering complex projects on time and within budget. Coordinated communication between technical, design, and production teams to meet deadlines.",
    },
  ];

  const olderWork = [
    {
      id: 101,
      title: "The 13th Room",
      image: "/past-cards/cfs.png",
      category: "Customer Service",
      year: "2017-2018",
      length: "Game Master",
      description: "Led customers through escape rooms.",
    },
    {
      id: 102,
      title: "Red Lobster",
      image: "/past-cards/rl.png",
      category: "Food Service",
      year: "2017-2018",
      length: "Server's Assistant",
      description:
        "Worked closely with servers cleaning tables, seating guests, and delivering food.",
    },
    {
      id: 103,
      title: "Pathfinder Media",
      image: "/past-cards/pfm.png",
      category: "Development",
      year: "2017",
      length: "Intern",
      description:
        "Wrote coverage as well as handled phones, calendars, and travel.",
    },
    {
      id: 104,
      title: "Torch Middle School",
      image: "/past-cards/tms.png",
      category: "Education",
      year: "2017",
      length: "Volunteer Teacher",
      description:
        "Took middle school students through pre, production, and post-production for their films.",
    },
    {
      id: 105,
      title: "Colorado Film School",
      image: "/past-cards/colo.png",
      category: "Administrative",
      year: "2016-2017",
      length: "Front Desk Assistant",
      description: "Handled phones, schedules, and led tours.",
    },
  ];

  const nextSlide = () => {
    setExpandedCard(null);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setExpandedCard(null);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleCardClick = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  const truncateDescription = (text, maxLength = 170) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength).trim()}...`;
  };

  const current = projects[currentIndex];
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  const expanded = expandedCard === current.id;

  return (
    <div style={styles.page}>
      <style>{css}</style>

      <header className="pastNavbar" style={styles.navbar}>
        <div style={styles.logo} onClick={() => navigate("/")}>
          tubWill
        </div>

        <nav className="pastNavPill" style={styles.nav}>
          <span style={styles.navItem} onClick={() => navigate("/")}>
            Home
          </span>
          <span style={styles.navItem} onClick={() => navigate("/current")}>
            About Me
          </span>
          <span style={styles.activeNav} onClick={() => navigate("/past")}>
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

      <main style={styles.mainContent}>
        <section style={styles.heroArea}>
          <div className="carouselWrap" style={styles.carouselWrap}>
            <div className="sidePreviewLeft" style={styles.sidePreviewLeft}>
              <img src={prev.image} alt={prev.title} style={styles.sideImage} />
            </div>

            <div className="mainCard" onClick={() => handleCardClick(current.id)}>
              {!expanded ? (
                <>
                  <img
                    src={current.image}
                    alt={current.title}
                    className="mainCardImage"
                  />

                  <div className="cardGradient" />

                  <div className="cardContent">
                    <h1 className="cardTitle">{current.title}</h1>

                    <div className="cardMeta">
                      <span>{current.category}</span>
                      <span>•</span>
                      <span>{current.year}</span>
                      <span>•</span>
                      <span>{current.length}</span>
                    </div>

                    <p className="cardDescription">
                      {truncateDescription(current.description)}
                    </p>

                    <button
                      type="button"
                      className="readMoreButton"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(current.id);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </>
              ) : (
                <div className="descriptionView">
                  <h1 className="descriptionTitle">{current.title}</h1>

                  <div className="descriptionMeta">
                    <span>{current.category}</span>
                    <span>•</span>
                    <span>{current.year}</span>
                    <span>•</span>
                    <span>{current.length}</span>
                  </div>

                  <p className="descriptionText">{current.description}</p>

                  <p className="descriptionHint">
                    Click again to return to image
                  </p>
                </div>
              )}
            </div>

            <div className="sidePreviewRight" style={styles.sidePreviewRight}>
              <img src={next.image} alt={next.title} style={styles.sideImage} />
            </div>

            <button
              type="button"
              className="carouselArrow carouselArrowLeft"
              style={{ ...styles.arrowButton, left: "40px" }}
              onClick={prevSlide}
            >
              ‹
            </button>

            <button
              type="button"
              className="carouselArrow carouselArrowRight"
              style={{ ...styles.arrowButton, right: "40px" }}
              onClick={nextSlide}
            >
              ›
            </button>
          </div>
        </section>

        <section style={styles.olderWorkSection}>
          <div style={styles.sectionHeaderRow}>
            <h2 style={styles.sectionTitle}>Older Work</h2>
            <span style={styles.sectionArrow}>›</span>
          </div>

          <div className="olderWorkRow">
            {olderWork.map((item) => (
              <div
                key={item.id}
                className="olderWorkCard"
                onClick={() => {
                  const matchIndex = projects.findIndex(
                    (project) => project.title === item.title
                  );
                  if (matchIndex !== -1) {
                    setExpandedCard(null);
                    setCurrentIndex(matchIndex);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const matchIndex = projects.findIndex(
                      (project) => project.title === item.title
                    );
                    if (matchIndex !== -1) {
                      setExpandedCard(null);
                      setCurrentIndex(matchIndex);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="olderWorkImage"
                />

                <div className="olderWorkOverlay" />

                <div className="olderWorkInfo">
                  <div className="olderWorkTitle">{item.title}</div>
                  <div className="olderWorkMeta">
                    {item.category} • {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    background:
      "linear-gradient(180deg,#5a1d87 0%,#341052 18%,#13001f 55%,#0b0014 100%)",
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

  logo: {
    position: "absolute",
    left: "32px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#f2ef16",
    fontSize: "44px",
    fontWeight: "900",
    lineHeight: 1,
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

  mainContent: {
    paddingTop: "150px",
    paddingBottom: "40px",
  },

  heroArea: {
    minHeight: "620px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
    boxSizing: "border-box",
  },

  carouselWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    width: "100%",
    justifyContent: "center",
  },

  sidePreviewLeft: {
    width: "160px",
    height: "500px",
    overflow: "hidden",
    borderRadius: "20px",
    opacity: 0.6,
    flexShrink: 0,
  },

  sidePreviewRight: {
    width: "160px",
    height: "500px",
    overflow: "hidden",
    borderRadius: "20px",
    opacity: 0.6,
    flexShrink: 0,
  },

  sideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "70px",
    height: "110px",
    borderRadius: "40px",
    border: "none",
    background: "#c1c517",
    color: "black",
    fontSize: "54px",
    cursor: "pointer",
    zIndex: 3,
  },

  olderWorkSection: {
    padding: "0 32px",
    marginTop: "10px",
  },

  sectionHeaderRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "18px",
  },

  sectionTitle: {
    fontSize: "28px",
    fontWeight: "900",
    margin: 0,
  },

  sectionArrow: {
    fontSize: "34px",
    lineHeight: 1,
    fontWeight: "400",
  },
};

const css = `
body {
  margin: 0;
  overflow-x: hidden;
  background: #0b0014;
}

* {
  box-sizing: border-box;
}

.mainCard {
  width: min(900px, calc(100vw - 440px));
  min-width: 0;
  height: 500px;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  flex-shrink: 1;
  box-shadow: 0 20px 50px rgba(0,0,0,.3);
}

.mainCardImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cardGradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top,rgba(0,0,0,.92),rgba(0,0,0,.28),rgba(0,0,0,0));
}

.cardContent {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
}

.cardTitle {
  font-size: 56px;
  margin: 0;
  line-height: 1;
  margin-bottom: 10px;
}

.cardMeta {
  display: flex;
  gap: 8px;
  margin-top: 0;
  font-size: 20px;
  font-weight: 600;
  opacity: .9;
  flex-wrap: wrap;
}

.cardDescription {
  margin-top: 12px;
  max-width: 680px;
  font-size: 18px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.readMoreButton {
  margin-top: 14px;
  background: rgba(255,255,255,0.16);
  color: white;
  border: 1px solid rgba(255,255,255,0.22);
  border-radius: 999px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.descriptionView {
  padding: 60px;
  background: black;
  height: 100%;
  box-sizing: border-box;
}

.descriptionTitle {
  font-size: 52px;
  margin: 0;
}

.descriptionMeta {
  margin-top: 10px;
  font-size: 20px;
  opacity: .85;
}

.descriptionText {
  margin-top: 20px;
  font-size: 22px;
  line-height: 1.5;
  max-width: 760px;
}

.descriptionHint {
  margin-top: 20px;
  opacity: .6;
}

.olderWorkRow {
  display: flex;
  gap: 18px;
  overflow: visible;
  padding-bottom: 8px;
  flex-wrap: wrap;
}

.olderWorkCard {
  position: relative;
  width: calc(20% - 15px);
  min-width: 0;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background: #111;
  transition: transform .2s ease, box-shadow .2s ease;
  outline: none;
}

.olderWorkCard:hover,
.olderWorkCard:focus-visible {
  transform: translateY(-4px);
  box-shadow: 0 18px 34px rgba(0,0,0,.35);
}

.olderWorkImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.olderWorkOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.88) 0%, rgba(0,0,0,.28) 42%, rgba(0,0,0,0) 72%);
}

.olderWorkInfo {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
}

.olderWorkTitle {
  font-size: 30px;
  font-weight: 900;
  line-height: 1.02;
  margin-bottom: 8px;
  text-shadow: 0 4px 14px rgba(0,0,0,.45);
}

.olderWorkMeta {
  font-size: 14px;
  font-weight: 700;
  color: rgba(255,255,255,.88);
}

@media (max-width: 1320px) {
  .mainCard {
    width: min(760px, calc(100vw - 400px));
    height: 460px;
  }

  .cardTitle {
    font-size: 48px;
  }

  .cardDescription {
    font-size: 17px;
    max-width: 580px;
  }
}

@media (max-width: 1100px) {
  .mainCard {
    width: min(82vw, 760px);
    height: 460px;
  }

  .mainCardImage {
    object-position: center;
  }

  .descriptionView {
    padding: 40px;
  }

  .descriptionTitle {
    font-size: 42px;
  }

  .descriptionText {
    font-size: 19px;
  }

  .olderWorkCard {
    width: calc(25% - 14px);
    height: 320px;
  }

  .olderWorkTitle {
    font-size: 24px;
  }
}

@media (max-width: 900px) {
  .pastNavbar {
    top: 16px !important;
    height: 108px !important;
  }

  .pastNavPill {
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
  .pastNavbar {
    top: 16px !important;
    height: 116px !important;
  }

  .pastNavPill {
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

  .pastNavPill span {
    font-size: 0.95rem !important;
  }

  .carouselWrap {
    display: block !important;
    width: 100% !important;
  }

  .sidePreviewLeft,
  .sidePreviewRight {
    display: none !important;
  }

  .mainCard {
    width: 100% !important;
    height: 500px;
    border-radius: 24px;
  }

  .carouselArrow {
    top: 50% !important;
    bottom: auto !important;
    transform: translateY(-50%) !important;
    width: 56px !important;
    height: 56px !important;
    border-radius: 50% !important;
    font-size: 36px !important;
    z-index: 5 !important;
  }

  .carouselArrowLeft {
    left: 8px !important;
  }

  .carouselArrowRight {
    right: 8px !important;
  }

  .cardTitle {
    font-size: 38px;
  }

  .cardMeta {
    font-size: 16px;
  }

  .cardDescription {
    font-size: 15px;
    max-width: 100%;
    -webkit-line-clamp: 2;
  }

  .olderWorkRow {
    gap: 14px;
  }

  .olderWorkCard {
    width: calc(50% - 7px);
    height: 270px;
  }

  .olderWorkTitle {
    font-size: 20px;
  }
}

@media (max-width: 640px) {
  .pastNavPill {
    gap: 10px !important;
    row-gap: 8px !important;
    padding: 10px 12px !important;
  }

  .pastNavPill span {
    font-size: 0.9rem !important;
  }
}

@media (max-width: 520px) {
  .pastNavPill {
    max-width: calc(100vw - 20px) !important;
  }

  .mainCard {
    height: 560px;
    aspect-ratio: auto;
  }

  .cardTitle {
    font-size: 32px;
  }

  .cardContent {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }

  .descriptionView {
    padding: 24px;
  }

  .descriptionTitle {
    font-size: 32px;
  }

  .descriptionMeta {
    font-size: 16px;
  }

  .descriptionText {
    font-size: 16px;
  }

  .olderWorkCard {
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 3;
  }

  .olderWorkTitle {
    font-size: 24px;
  }

  .carouselArrowLeft {
    left: 6px !important;
  }

  .carouselArrowRight {
    right: 6px !important;
  }
}
`;

export default Past;