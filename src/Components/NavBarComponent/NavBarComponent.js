import './NavBarComponent.css';

function NavBar () {
return (
  <header>
      <h1>JOHN DOE</h1>
      <ul className="navbar">
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
  </header>
);
}
export default NavBar;