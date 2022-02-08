import React, { useState } from 'react';
import Post_Action from './Post_Action';
import Post_Author from './Post_Author';
import Post_Comment from './Post_Comment';
import Post_Content from './Post_Content';
import Post_Image from './Post_Image';
import Post_React from './Post_React';
import { useEffect } from 'react';
import Post_Form_Comment from './Post_Form_Comment';

function Post() {
 
  const [Posts, setPosts] = useState([]);
  console.log(Posts);
  useEffect(() => {
    
    fetch('http://localhost:3000/profiles')
      .then(res => res.json())
      .then(data => setPosts(data))
  
    return () => {
    };
  }, []);
 

  return <div>
     <div class="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
     {Posts.map((value) =>{
       return(
         <div>
         <Post_Author name={value.name} avt={value.avatar} />
          <Post_Content content={value.post[0].title}/>
          <Post_Image post_img={value.post[0].post_img}/>
          <Post_React  />
          <Post_Action />
          <div className="py-2 px-4">
          <Post_Comment/>
          <div className='py-2 px-4'>
          <Post_Form_Comment avt={value.avatar}/>
          </div>
          </div>
         </div>
       )
      
     })}
         
     </div>
  </div>;
}

export default Post;
