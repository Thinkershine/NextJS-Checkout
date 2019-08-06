import Link from "next/link";

const Header = () => (
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link">Blog</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link">Blog</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/dynamicBlog">
            <a className="nav-link">Dynamic Blog</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/tvShows">
            <a className="nav-link">TV Shows</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
