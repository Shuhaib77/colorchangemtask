import React, { useState } from 'react'

function Colorbox(props) {
   
   
    
  return (
    <div>
        <div style={{width:"100px",height:"100px",backgroundColor:props.color}}></div>
    </div>
  )
}

export default Colorbox