import React from 'react';
import Post_Action from './Post_Action';
import Post_Author from './Post_Author';
import Post_Comment from './Post_Comment';
import Post_Content from './Post_Content';
import Post_Image from './Post_Image';
import Post_React from './Post_React';

function Post() {
  return <div>
     <div class="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
         <Post_Author/>
         <Post_Content/>
         <Post_Image/>
         <Post_React/>
         <Post_Action/>
         <div class="py-2 px-4">
          <Post_Comment/>
          <Post_Comment/>
          <Post_Comment/>

         </div>
     </div>
  </div>;
}

export default Post;
