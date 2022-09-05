function Header(){
    return(
        <>

<nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#">
      
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{border : "none"}}
    >
      <span className="navbar-toggler-icon Nv-Icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav Nv mx-auto">
        <a className="nav-link active text-white Nv-Br1 text-center" href="#">
          Community <span className="sr-only">(current)</span>
        </a>
        <a className="nav-link text-white Nv-Br1 text-center" href="#">
          Portfolios
        </a>
        <a className="nav-link text-white Nv-Br2" href="#">
          Inspiration
        </a>
        <a className="nav-link text-white Nv-Br2" href="#">
          News
        </a>
        <a className="nav-link text-white Nv-Br2" href="#">
        Features 
        </a>        
        <a className="nav-link text-white Nv-Br2" href="#">
          Jobs
        </a>
      </div>
    </div>
    </nav>
        </>
    )
}
export default Header;