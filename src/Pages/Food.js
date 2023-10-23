import React from 'react'
import Item1 from '../Images/Food.jpeg'

const Food = () => {
  return (
    <>

      <div className="onboard-card-layout-1">
        <input className="location-text" placeholder="Search" type="text" name="" id="" style={{width: "500px", marginLeft: "500px"}}/>
        <div className="onboard-card-items">
          <img className="onboard-tain-sub" alt="Group" src={Item1} />
          <img className="onboard-tain-sub" alt="Group" src={Item1} />
          <img className="onboard-tain-sub" alt="Group" src={Item1} />
          <img className="onboard-tain-sub" alt="Group" src={Item1} />
          <img className="onboard-tain-sub" alt="Group" src={Item1} />
        </div>
      </div>

      <div className="onboard-card-layout-2">
        <div className="onboard-card-items-2">
          <img className="onboard-tain-sub-2" alt="Group" src={Item1} />
          <img className="onboard-tain-sub-2" alt="Group" src={Item1} />
          <img className="onboard-tain-sub-2" alt="Group" src={Item1} />
        </div>
      </div>

    </>
  )
}

export default Food
