import React from 'react';
import PropTypes from 'prop-types';
import { useEffect,useState } from 'react';
import Layout_Contact_Item from './Layout_Contact_Item';

function Layout_Contact(props) {
  const [Contact, setContact] = useState([]);
  useEffect(() => {
    
    fetch('http://localhost:3000/profiles')
      .then(res => res.json())
      .then(data => setContact(data))
  
    return () => {
    };
  }, []);
  return (
    <div className="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-0">
      <div className="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
        <span className="font-semibold text-lg">Contacts</span>
        <div className="flex space-x-1">
          <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
            <i className="bx bx-search-alt-2" />
          </div>
          <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
            <i className="bx bx-dots-horizontal-rounded" />
          </div>
        </div>
      </div>
      <ul className="p-2">
      {Contact.map((value)=>(
        <Layout_Contact_Item key={value.profile_id} avt={value.avatar} name={value.name}/>
      ))}
          
      </ul>
    </div>
  );
}

Layout_Contact.propTypes = {};

export default Layout_Contact;
