import AppBar from "../AppBar/AppBar";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
