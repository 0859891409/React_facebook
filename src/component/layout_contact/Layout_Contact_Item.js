import React from 'react';
import PropTypes from 'prop-types';

function Layout_Contact_Item({avt,name}) {
  return (
    <li>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
        <div className="relative">
          <img
            src={avt}
            alt="Friends profile picture"
            className="rounded-full w-10 h-10"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div>
          <span className="font-semibold">{name}</span>
        </div>
      </div>
    </li>
  );
}

Layout_Contact_Item.propTypes = {};

export default Layout_Contact_Item;
