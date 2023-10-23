import React from 'react'
import '../Css/Kuli.css'
const Kuli = () => {
  return (
    <div className='main-kuli'>
      <div style={{ display: "flex", flexDirection: "row" }}><p style={{ fontWeight: "bold", fontSize: "x-large" }}>Station: </p> <input className="location-text" placeholder="  Enter Train Number" type="text" name="" id="" style={{ width: "500px", borderBottom: "1px" }} /><br /><br /></div>
      <div style={{ display: "flex", flexDirection: "row" }}><p style={{ fontWeight: "bold", fontSize: "x-large" }}>Train Number: </p> <input className="location-text" placeholder="  Enter Train Number" type="text" name="" id="" style={{ width: "500px", borderBottom: "1px" }} /><br /><br /></div>
      <div style={{ display: "flex", flexDirection: "row" }}><p style={{ fontWeight: "bold", fontSize: "x-large" }}>Cart Number: </p> <input className="location-text" placeholder="  Enter Train Number" type="text" name="" id="" style={{ width: "500px", borderBottom: "1px" }} /><br /><br /></div><br />
      <div style={{}}><p style={{ fontWeight: "bold", fontSize: "x-large" }}>Reason of Requirement: </p>
        <input type="radio" name="Yes" id="yes" /> Yes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="No" id="no" /> No
      </div>
      <div style={{}}><p style={{ fontWeight: "bold", fontSize: "x-large" }}>Any Specifications/ Instructions: </p>
        <textarea name="" id="" cols="40" rows="10" style={{ backgroundColor: "grey", color: "black" }}></textarea>
      </div>

      <button type="button" class="btn btn-success" style = {{width: "200px", fontSize: "large", fontWeight: "bold", marginLeft: "80px"}}>Submit</button>

    </div>
  )
}

export default Kuli
