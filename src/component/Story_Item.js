import React from 'react';
import PropTypes from 'prop-types';

function Story_Item(props) {
  return (
    <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
    <div className="relative h-full group cursor-pointer">
  <img src={value.content_img} alt="Story images" className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full" />
<div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
<span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
  {value2.name}
</span>
<div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
  <img src={avt} alt="Profile picture" />
</div>
  </div>
  </div>
  );
}

Story_Item.propTypes = {};

export default Story_Item;
