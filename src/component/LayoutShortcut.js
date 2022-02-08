import React from 'react';
import PropTypes from 'prop-types';
import avt from '../images/profile.JPG'
import friends from '../images/friends.png'
import page from '../images/page.png'
import group from '../images/group.png'
import memory from '../images/memory.png'
import group1 from '../images/group-img-1.jpg'
import group2 from '../images/group-img-2.jpg'

function LayoutShortcut(props) {
  return (
    
    <div className="w-1/5 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0">
        <ul className="p-4">
          <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
              <img src={avt} alt="Profile picture" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Do Nguyen</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
              <img src={friends} alt="Profile picture" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Friends</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
              <img src={page} alt="Profile picture" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Pages</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
              <img src={memory} alt="Profile picture" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Memories</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
              <img src={group} alt="Profile picture" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Groups</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
              <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                <i className="bx bx-chevron-down" />
              </span>
              <span className="font-semibold">See more</span>
            </a>
          </li>
          <li className="border-b border-gray-200 dark:border-dark-third mt-6" />
        </ul>
        <div className="flex justify-between items-center px-4 h-4 group">
          <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">Your shortcuts</span>
          <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md hidden group-hover:inline-block">Edit</span>
        </div>
        <ul className="p-4">
          <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
              <img src={group2} alt="Profile picture" className="w-10 h-10 rounded-lg" />
              <span className="font-semibold">Cộng đồng Front-end(HTML/CSS/JS) Việt Nam</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
              <img src={group1} alt="Profile picture" className="w-10 h-10 rounded-lg" />
              <span className="font-semibold">CNPM08_UIT_Group học tập</span>
            </a>
          </li>
          
        </ul>
        <div className="mt-auto p-6 text-sm text-gray-500 dark:text-dark-txt">
          <a href="#">Privacy</a>
          <span>.</span>
          <a href="#">Terms</a>
          <span>.</span>
          <a href="#">Advertising</a>
          <span>.</span>
          <a href="#">Cookies</a>
          <span>.</span>
          <a href="#">Ad choices</a>
          <span>.</span>
          <a href="#">More</a>
          <span>.</span>
          <span>Facebook © 2021</span>
        </div>
      </div>
  );

  
}

LayoutShortcut.propTypes = {};

export default LayoutShortcut;
