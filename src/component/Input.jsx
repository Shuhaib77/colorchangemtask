import React, { useState } from 'react'
import Colorbox from './Colorbox'

function Input() {
  const [item,setitem]=useState([""])

  const [initem,setinitm]=useState("")
  const handlechange=(e)=>{

    setinitm(e.target.value)

  }
  const handleclick=()=>{
    
    setitem([...item,initem])
    console.log(initem);
   
  }


  return (
    <div>
        <div>
            <input type="text" placeholder='enter color' onChange={handlechange} />
            {/* <h1>{initem}</h1> */}
            <button  type='submit' onClick={handleclick} >submit</button>
            <Colorbox color={initem}/>
        </div>
    </div>
  )
}

export default Input