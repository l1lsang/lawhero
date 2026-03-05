import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, borderBottom: "1px solid #eee" }}>
      <Link to="/">LawHero</Link>

      <div style={{ float: "right" }}>
        <Link to="/community">커뮤니티</Link>
        {"  "}
        <Link to="/install">앱 다운로드</Link>
      </div>
    </nav>
  );
}