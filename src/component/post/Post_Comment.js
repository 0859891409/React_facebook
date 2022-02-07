import React from 'react';
import PropTypes from 'prop-types';
import avt5 from '../../images/avt-5.jpg'
import Post_React from './Post_React';
import Post_Reply from './Post_Reply';
function Post_Comment(props) {
  return (
    <div class="flex space-x-2">
      <img
        src={avt5}
        alt="Profile picture"
        className="w-9 h-9 rounded-full"
      />
      <div>
        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
          <span className="font-semibold block">John Doe</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
          <span className="font-semibold cursor-pointer">Like</span>
          <span>.</span>
          <span className="font-semibold cursor-pointer">Reply</span>
          <span>.</span>
          10m
        </div>
        <Post_Reply/>
      </div>
    </div>
  );
}

Post_Comment.propTypes = {};

export default Post_Comment;
