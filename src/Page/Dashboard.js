import React from "react";
import PropTypes from "prop-types";
import Nav from "../component/Nav";
import LayoutShortcut from "../component/LayoutShortcut";
import LayoutContent from "../component/LayoutContent";
import Layout_Contact from "../component/layout_contact/Layout_Contact";

function Dashboard(props) {
  return (
    <div>
      <Nav />
      <div class="flex justify-center h-screen ">
        <LayoutShortcut />
        <LayoutContent />
        <Layout_Contact />
      </div>
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
