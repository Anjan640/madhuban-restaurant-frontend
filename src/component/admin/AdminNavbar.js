import React from 'react'
import { Link,useMatch, useResolvedPath } from 'react-router-dom'

function AdminNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <CustomLink className="nav-link" to="">Dashboard <span className="sr-only">(current)</span></CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink className="nav-link" to="menu">Menu</CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink className="nav-link" to="user">User</CustomLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminNavbar;


function CustomLink({to,children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname,end:true})
    return(
        <li className={isActive  ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}