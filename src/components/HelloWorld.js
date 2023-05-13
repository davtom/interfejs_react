import React from 'react';

function HelloWorld(props){
    return (
     <>
         <p>Hello {props.name}</p>
         <img src="/avatar.jpg" alt="avatar" style={{borderRadius: "50%", width: "60%"}}/>
     </>
    );
}

export default HelloWorld;