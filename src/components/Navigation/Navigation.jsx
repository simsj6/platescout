import "./Navigation.css";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <li>
          <a href="/login" className="Navigation-login">
            Log In
          </a>
        </li>
        <li>
          <a href="signup" className="Navigation-signup">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
