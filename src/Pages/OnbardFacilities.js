import React from 'react'
import Item1 from '../Images/medical.jpeg'
import Item2 from '../Images/Hygine.jpeg'
import Item3 from '../Images/Entertainment.jpeg'
import Item4 from '../Images/Food.jpeg'
import Item5 from '../Images/Drinks.png'
import Item6 from '../Images/Blankets.jpeg'
import Item7 from '../Images/Upgrades.jpeg'
import Item8 from '../Images/Temperature.jpeg'
import '../Css/Onboard.css'

const OnbardFacilities = () => {
  return (
    <>

      <div className="onboard-card-layout-1">
        <input className="location-text" placeholder="Enter Train Number" type="text" name="" id="" style={{width: "500px", marginLeft: "500px"}}/>
        <div className="onboard-card-items">
          <img className="onboard-tain-sub" alt="Group" src={Item1} />
          <img className="onboard-tain-sub" alt="Group" src={Item2} />
          <img className="onboard-tain-sub" alt="Group" src={Item3} />
          <img className="onboard-tain-sub" alt="Group" src={Item4} />
          <img className="onboard-tain-sub" alt="Group" src={Item5} />
        </div>
      </div>

      <div className="onboard-card-layout-2">
        <div className="onboard-card-items-2">
          <img className="onboard-tain-sub-2" alt="Group" src={Item6} />
          <img className="onboard-tain-sub-2" alt="Group" src={Item7} />
          <img className="onboard-tain-sub-2" alt="Group" src={Item8} />
        </div>
      </div>

    </>
  )
}

export default OnbardFacilities
