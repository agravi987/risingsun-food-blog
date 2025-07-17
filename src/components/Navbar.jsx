import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/">🥗 RisingSun Food Blog</Link>
      </div>
      <div className="navbar-center">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/foodmenu" className="nav-link">
          Food Menu
        </Link>
      </div>
      <div className="navbar-right">
        <Link href="/addFood" className="add-food-btn">
          ➕ Add Food
        </Link>
      </div>
    </nav>
  );
}
