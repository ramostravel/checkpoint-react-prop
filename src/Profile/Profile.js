import React from 'react'


function Profile(props) {
  return (
    <div>
    <h1>fullname={props.fullname} 
    <p> bio={props.bio}</p>
    <p> profession={props.profession}</p>
    <p> {props.children}</p>
    <button onClick={props.data}> Click me !</button>
   
    </h1>
    
    
    
        </div>
  )
}

export default Profile