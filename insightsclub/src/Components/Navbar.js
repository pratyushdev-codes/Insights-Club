import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1C021D" }}>
        <div className="container-fluid">
          <img src="./images/logo.png" style={{ height: "75px", width: "70px" }} alt="Logo" />
          <a className="navbar-brand" href="#" style={{ fontSize: '24px', color:"orange" , fontWeight: "bold" }}>Insights Club</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div style={{ padding: "10px" }}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: '18px' }}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ fontSize: '18px' }}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ fontSize: '18px' }}>Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ fontSize: '18px' }}>Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ fontSize: '18px' }}>Contact</a>
                </li>
                <i class="fa-regular fa-user" style={{color: "#ffffff", marginLeft:"900px"}}></i>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
