import React, { Component } from 'react';
const Student = (props) => {
  const hi = {
      color:'white',
      fontSize: 34,
      textAlign : 'justify',
      backgroundColor: '#90a6ae'
  }
    return ( 
        <div>
            <h1>{props.name}</h1>
            <p style={hi}>{props.description}</p>
        </div>
     );
}
 
export default Student;