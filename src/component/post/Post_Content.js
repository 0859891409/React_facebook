import React from 'react';
import PropTypes from 'prop-types';

function Post_Content({content}) {
  return (
    <div className="text-justify px-4 py-2">
        {content}
    </div>  
  );
}

Post_Content.propTypes = {};

export default Post_Content;
