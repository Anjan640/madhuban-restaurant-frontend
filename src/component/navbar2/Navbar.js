import React from 'react'
import { Link,useMatch, useResolvedPath } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
        <ul>
        <li>
            <CustomLink to="/pricing">Pricing</CustomLink>
            {/* <Link to="/pricing">Pricing</Link> */}
        </li>
        <li>
            {/* <Link to ="/about">About</Link> */}
            <CustomLink to="/about">About</CustomLink>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar


function CustomLink({to,children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname,end:true})
    return(
        <li className={isActive  ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}