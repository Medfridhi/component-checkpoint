import React from 'react';
import Photo from './profile/ProfilPhoto'
import FullN from './profile/FullName';
import Add from './profile/Address'
import './App.css';
import './Style.css';

function main() {
  return (
    <div className="main">
      
          <Photo/>
          <FullN/>
          <Add/>
        
     
    </div>
  );
}

export default main;
