import { Link } from 'react-router-dom';  // Import Link for navigation

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Home page link */}
        <li><Link to="/team">Team</Link></li> {/* Link to Team page */}
        <li><Link to="/blog">Blog</Link></li> {/* Link to Blog page */}
        <li><Link to="/contact">Contact Us</Link></li> {/* Link to Contact Us page */}
      </ul>
    </nav>
  );
}

export default Navbar;
