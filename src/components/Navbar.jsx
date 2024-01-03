import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "#FFF",
              background: isActive ? "#FD853A" : "",
              padding: isActive ? "20px 40px" : "20px 40px",
              borderRadius: isActive ? "60px" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutMe"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "#FFF",
              background: isActive ? "#FD853A" : "",
              padding: isActive ? "20px 40px" : "20px 40px",
              borderRadius: isActive ? "60px" : "",
            };
          }}
        >
          About Me
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/services"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "#FFF",
              background: isActive ? "#FD853A" : "",
              padding: isActive ? "20px 40px" : "20px 40px",
              borderRadius: isActive ? "60px" : "60px",
            };
          }}
        >
          Services
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/skills"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "#FFF",
              background: isActive ? "#FD853A" : "",
              padding: isActive ? "20px 40px" : "20px 40px",
              borderRadius: isActive ? "60px" : "",
            };
          }}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "#FFF",
              background: isActive ? "#FD853A" : "",
              padding: isActive ? "20px 40px" : "20px 40px",
              borderRadius: isActive ? "60px" : "",
            };
          }}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "#FFF",
              background: isActive ? "#FD853A" : "",
              padding: isActive ? "20px 40px" : "20px 40px",
              borderRadius: isActive ? "60px" : "",
            };
          }}
        >
          Contact Me
        </NavLink>
      </li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li> */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#171717] rounded-[60px] my-[40px]">
        <div className="navbar-start lg:p-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#FFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#171717] rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex">
            <div className="my-auto mr-2 bg-white rounded-[50px]">
              <img className="h-[50px] w-[50px]" src="Sadik_Moktadir-removebg-preview.png" alt="" />
            </div>
            <div className="my-auto">
            <p className="text-[20px] lg:text-[40px] text-white font-bold">Sadik</p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
