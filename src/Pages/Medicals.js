import React from 'react'
import "../Css/Medical.css"

const medicals = () => {
  return (
    <div className='main-medical'>
      <p style={{textAlign: "center"}}>Do you require a medical specialist? &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name="Yes" id="yes" /> Yes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="No" id="no" /> No</p>
      <input className="location-text" placeholder="  Enter Train Number" type="text" name="" id="" style={{ width: "500px", marginLeft: "500px" }} /><br/><br/>
      <div className="three-button-div">
        <button className='button-medical'>Bandage +</button>
        <button className='button-medical'>Insect Repellent +</button>
        <button className='button-medical' style={{ marginRight: "100px" }}>Crepe Bandage +</button>
      </div><br /><br />
      <div className="three-button-div">
        <button className='button-medical'>Cotton +</button>
        <button className='button-medical'>First Aid Kit +</button>
        <button className='button-medical' style={{ marginRight: "100px" }}>Painkiller +</button>
      </div><br /><br />
      <div className="three-button-div">
        <button className='button-medical'>Crocin +</button>
        <button className='button-medical'>CPR Mask +</button>
        <button className='button-medical' style={{ marginRight: "100px" }}>Thermometer +</button>
      </div><br /><br />
      <div className="three-button-div">
        <button className='button-medical'>Gel/Ointment +</button>
        <button className='button-medical'>Inhaler +</button>
        <button className='button-medical' style={{ marginRight: "100px" }}>Lisinopril +</button>
      </div><br /><br />
      <div className="three-button-div">
        <button className='button-medical'>Icepack +</button>
        <button className='button-medical'>Allergy Cream +</button>
        <button className='button-medical' style={{ marginRight: "100px" }}>Lorazepam +</button>
      </div><br /><br />
      <div className="three-button-div">
        <button className='button-medical'>Saline Solution +</button>
        <button className='button-medical'>Epipen +</button>
        <button className='button-medical' style={{ marginRight: "100px" }}>Aspirin +</button>
      </div>
    </div>
  )
}

export default medicals
