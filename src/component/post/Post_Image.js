import React from 'react';
import PropTypes from 'prop-types';
import post from '../../images/post-1.jpg'
function Post_Image(props) {
  return (
    <div className="py-2">
    <img src={post} alt="Post image" />
  </div>
  );
       
}

Post_Image.propTypes = {};

export default Post_Image;
