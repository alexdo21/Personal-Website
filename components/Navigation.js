import React, {Component} from 'react';
import Link from 'next/link'
//import '../static/css/nav.css'

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <Link href="/"><a className="navbar-brand">Alex Do</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link href="/Software"><a className="nav-link">Software</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/Blog"><a className="nav-link">Blog</a></Link>
            </li> */}
          </ul>
          <div className="container-fluid">
            <ul className="navbar-nav justify-content-end">
              <li className="navbar-nav">
                <Link href="/Contact"><a className="nav-link">Contact</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Navigation;