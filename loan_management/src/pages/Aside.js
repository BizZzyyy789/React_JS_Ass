import React from 'react'

const Aside = () => {
  return (
    <div>
              <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid" />
              <span>Home</span>
            </a>
          </li>{/* End Dashboard Nav */}
            <li>
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person" />
              <span>Loans</span>
            </a>
            </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark" />
              <span>Payments</span>
            </a>
          </li>{/* End Blank Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark" />
              <span>Borrowers</span>
            </a>
          </li>{/* End Blank Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark" />
              <span>Loan Plan</span>
            </a>
          </li>{/* End Blank Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark" />
              <span>Loan Types</span>
            </a>
          </li>{/* End Blank Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark" />
              <span>Users</span>
            </a>
          </li>{/* End Blank Page Nav */}
        </ul>
      </aside>{/* End Sidebar*/}
    </div>
  )
}

export default Aside