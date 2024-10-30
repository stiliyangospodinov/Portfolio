import { Link } from "react-router-dom"

export default function Header(){
    return (
        <>
  <header className="top-area">
    <div className="header-area">
      {/* Start Navigation */}
      <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
        <div className="container">
          {/* Start Header Navigation */}
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
          {/*/.navbar-header*/}
          {/* End Header Navigation */}
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse menu-ui-design"
            id="navbar-menu"
          >
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className=" smooth-menu active" />
              <li className=" smooth-menu">
                <Link to="/about">about me</Link>
              </li>
              <li className=" smooth-menu">
                <Link to="/education">education</Link>
              </li>
              <li className="smooth-menu">
                <Link to="/skills">skills</Link>
              </li>
              <li className="smooth-menu">
                <Link to="/profiles">profile</Link>
              </li>
              <li className="smooth-menu">
                <Link to="/projects">projects</Link>
              </li>
              <li className="smooth-menu">
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            {/*/.nav */}
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/*/.container*/}
      </nav>
      {/*/nav*/}
      {/* End Navigation */}
    </div>
    {/*/.header-area*/}
    <div className="clearfix" />
  </header>
  {/* /.top-area*/}
</>

    )
}