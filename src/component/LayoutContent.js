import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import FormPost from './FormPost';
import Post from './post/Post';

function LayoutContent(props) {
  return (
       <div class="w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2">
           <Story/>
           <FormPost/>
           <Post/>
       </div>
  );
}

LayoutContent.propTypes = {};

export default LayoutContent;
