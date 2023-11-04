// import React from "react";
// import { Container, Navbar } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const { carts } = useSelector((state) => state.allCart);
//   console.log(carts);
//   return (
//     <div>
//       <Navbar style={{ height: "60px", background: "black", color: "#fff" }}>
//         <Container>
//           <h3 className="text-light"><span><NavLink className="text-decoration-none text-white" to="/" >E-Commerce</NavLink></span></h3>
//           <NavLink to="/cart" className="text-decoration-none text-light mx-2">
//             <div id="ex4">
//               <span
//                 className="p1 fa-stack fa-2x has-badge"
//                 data-count={carts.length}
//               >
//                 <i class="fa-solid fa-cart-shopping"></i>
//               </span>
//             </div>
//           </NavLink>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;















import React from 'react'
import { Navbar, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {

  const { carts } = useSelector((state) => state.allCart)
  console.log(carts)

  return (
    <div>
    <Navbar style={{height: '60px', background: '#000', color: '#fff'}} >
    <Container>

    <NavLink to="/" className="text-decoration-none text-light" >
    <h3 className="text-light" >E-Commerce</h3>
    </NavLink>

    <NavLink to="/cart" className="text-decoration-none text-light" >
    <div id="ex4" >
    <span className="p1 fa-stack fa-2x has-badge" data-count={carts.length} >
    <i className="fa-solid fa-shopping-cart" ></i>
    </span>
    </div>
    </NavLink>
    

    </Container>
    </Navbar>
    </div>
  )
}

export default Header