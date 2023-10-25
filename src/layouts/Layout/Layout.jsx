import PropTypes from 'prop-types';

import Navbar from "../../components/Navbar/Navbar"
import { Footer } from "../Fotter/Footer"


export const Layout = ({children}) => {
  return (
    <div className="layoutContainer">
      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
