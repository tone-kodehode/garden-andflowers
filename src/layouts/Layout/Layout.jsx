// import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';

import Navbar from "../../components/Navbar/Navbar"
import { Footer } from "../Fotter/Footer"


export const Layout = () => {
  return (
    <div className="layoutContainer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]),
// };
