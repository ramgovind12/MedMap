import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pharmacy-profile">Pharmacy Profile</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </nav>
  );
}


export default Navbar;


// import React from 'react';

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/pharmacy-profile">Pharmacy Profile</a></li>
//         <li><a href="/inventory">Inventory</a></li>
//         <li><a href="/orders">Orders</a></li>
//         <li><a href="/feedback">Feedback</a></li>
//         <li><a href="/about-us">About Us</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
