import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(){
  useEffect(() => {
 
    const handleMenuClose = () => {
        $('.navbar-collapse').collapse('hide');
    };

    $('.navbar-collapse a').on('click', handleMenuClose);
    $('.navbar-brand').on('click', handleMenuClose);

    const handleClickOutside = (event) => {
      const menu = document.getElementById('navbar-menu');
      if (menu && !menu.contains(event.target)) {
        $('.navbar-collapse').collapse('hide');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
        $('.navbar-collapse a').off('click', handleMenuClose);
        $('.navbar-brand').off('click', handleMenuClose);
        document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="top-area">
        <div className="header-area">
          <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars" />
                </button>
                <Link to="/" className="navbar-brand">
                  stiliyan gospodinov
                </Link>
              </div>
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className="smooth-menu active" />
                  <li className="smooth-menu"><Link to="/about">about me</Link></li>
                  <li className="smooth-menu"><Link to="/education">education</Link></li>
                  <li className="smooth-menu"><Link to="/skills">skills</Link></li>
                  <li className="smooth-menu"><Link to="/profiles">profile</Link></li>
                  <li className="smooth-menu"><Link to="/projects">projects</Link></li>
                  <li className="smooth-menu"><Link to="/contact">contact</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
