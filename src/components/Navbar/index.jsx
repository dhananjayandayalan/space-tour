import React from "react";

const Navbar = ({ handleRoute }) => {
  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleRoute("")}>Home</li>
          <li onClick={() => handleRoute("destination")}>Destination</li>
          <li onClick={() => handleRoute("crew")}>Crew</li>
          <li onClick={() => handleRoute("technology")}>Technology</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
