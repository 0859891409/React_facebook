import React from 'react';
import PropTypes from 'prop-types';
import post from '../../images/post-1.jpg'
function Post_Image({post_img}) {
  return (
    <div className="py-2">
    <img src={post_img} alt="Post image" />
  </div>
  );
       
}

Post_Image.propTypes = {};

export default Post_Image;
