import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/current">Current</Link>
      <Link to="/past">Past</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;