import React,{useState} from 'react';
function About(props)
{
    const [val,setVal]=useState("Sunita")
    const test =(e)=>
    {
        console.warn("test function",e.target.value)
        setVal(e.target.value)
    }
    return(
        <div>
            <h1>About us componet</h1>
            <input type="text" onChange={test} />
            <button onClick={()=>alert(val)}>Update</button>
            
        </div>
    )
}
export default About;