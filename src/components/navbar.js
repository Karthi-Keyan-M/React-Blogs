import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Welcome to Blog Mania</h1>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          CREATE
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
