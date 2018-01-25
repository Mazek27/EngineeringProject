import * as Navbar from "react-bootstrap/lib/Navbar";
import * as React from "react";

export const NavBar = () => {
    return <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
    {/*<nav className={"sticky-top navbar navbar-expand-sm navbar-dark bg-dark"}>*/}
        {/*<NavLink className={"navbar-brand"} to="/home">Home</NavLink>*/}
        {/*<button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*<span className={"navbar-toggler-icon"} onClick={(e) => this.changeCollapsed(e)}></span>*/}
        {/*</button>*/}

        {/*<div className={this.state.isCollapse ? "collapse navbar-collapse" : "navbar-collapse"} id="navBar">*/}
            {/*<ul className="navbar-nav mr-auto">*/}
                {/*<li  className={"nav-item"}>*/}
                    {/*<NavLink className={"nav-link"} to="/about">About!</NavLink>*/}
                {/*</li>*/}
                {/*<li  className={"nav-item"}>*/}
                    {/*<NavLink className={"nav-link"} to="/applications">Applications!</NavLink>*/}
                {/*</li>*/}
                {/*<li  className={"nav-item"}>*/}
                    {/*<NavLink className={"nav-link"} to="/converter">Converter!</NavLink>*/}
                {/*</li>*/}
                {/*<li  className={"nav-item"}>*/}
                    {/*<NavLink className={"nav-link"} to="/calculator">Calculator!</NavLink>*/}
                {/*</li>*/}
            {/*</ul>*/}
        {/*</div>*/}
    {/*</nav>*/}
}