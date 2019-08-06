import Header from "./header";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/site.css";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {/* Menu */}
    {props.children}
    {/* Footer */}
  </div>
);

export default Layout;
