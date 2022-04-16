import React, { useState } from 'react';

const User = ({ user }) => {
  const [hideInfo, setHideInfo] = useState(true);

  const toggle = () => {
    setHideInfo((prevState) => !prevState);
  };
  return (
    <div className='card text-dark bg-light mb-3' key={user.id}>
      <div className='card-header' onClick={toggle} role='button'>
        {user.name}
      </div>
      <div className={`card-body ${hideInfo ? 'd-none' : ''}`}>
        <div className='row pt-2'>
          <p className='col-12 col-md-6 card-text'>
            <i className='fa fa-briefcase mx-2'></i>
            <span className='pl-2'>
              <strong>Company: </strong>
              {user.company.name}
            </span>
          </p>
          <p className='col-12 col-md-6 card-text'>
            <i className='fa fa-globe mx-2'></i>
            <span className='pl-2'>
              <strong>Website: </strong>
              {user.website}
            </span>
          </p>

          <p className='col-12 col-md-6 card-text'>
            <i className='fa-solid fa-envelope mx-2'></i>
            <span className='pl-2'>
              <strong>Email: </strong>
              {user.email}
            </span>
          </p>
          <p className='col-12 col-md-6 card-text'>
            <i className='fa fa-phone mx-2'></i>
            <span className='pl-2'>
              <strong>Phone: </strong>
              {user.phone}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
