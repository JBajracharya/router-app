import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
  
  return (
    <ul>
      <li>
        {/* Link instead of <a> prevents the page from making request to the browser and makes the UX faster */}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
