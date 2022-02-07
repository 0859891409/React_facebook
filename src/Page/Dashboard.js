import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../component/Nav';
import LayoutShortcut from '../component/LayoutShortcut';
import LayoutContent from '../component/LayoutContent';

function Dashboard(props) {
  return (
      <div>
            <Nav/>
            <div class="flex justify-center h-screen ">
            <LayoutShortcut/>
            <LayoutContent/>
            </div>
            
          
            
      </div>
    
  );
}

Dashboard.propTypes = {};

export default Dashboard;
