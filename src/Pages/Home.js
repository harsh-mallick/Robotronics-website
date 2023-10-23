import React from "react";
import "../Css/Home.css";
import group9 from '../Images/group-9.png'
import group10 from '../Images/group-10.png'
import group11 from '../Images/group-11.jpeg'
import group12 from '../Images/group-12.jpeg'
import group13 from '../Images/group-13.png'
import group14 from '../Images/group-14.jpeg'
import Train1 from '../Images/Train1.jpg'
import Train2 from '../Images/Train2.jpg'
import Train3 from '../Images/Train3.jpg'
import Train4 from '../Images/Train4.jpg'
import Train5 from '../Images/Train5.jpg'
import Train6 from '../Images/Train6.jpeg'
import Food1 from '../Images/Food1.jpeg'
import nextpage from '../Images/next-page.png'
import nextpagecopy from '../Images/next-page - Copy.png'


const Home = () => {
    return (
        <div className="landing-home">
            <div className="div">
                {/* Trains Update */}
                <div className="card-layout-1">
                        <div className="">
                            <div className="">
                                <div className="">
                                    <div className="subhead1">Live Status Updates <input className="location-text" placeholder="Enter your location" type="text" name="" id="" /></div>
                                    <div className="subhead2">currently running</div>
                                </div>
                                <div className="card-items">
                                    <img className="tain-sub" alt="Group" src={Train1} />
                                    <img className="tain-sub" alt="Group" src={Train2} />
                                    <img className="tain-sub" alt="Group" src={Train3} />
                                    <img className="tain-sub" alt="Group" src={Train4} />
                                    <img className="tain-sub" alt="Group" src={Train5} />
                                    <img className="tain-sub-1" alt="Group" src={Train6} />
                                </div>
                            </div>
                            <img className="back-to-2" alt="Back to" src={nextpagecopy} />
                            <img className="next-page-2" alt="Next page" src={nextpage} />
                        </div>
                </div>

                {/* Things To do */}
                <div className="overlap-3">
                    <div className="group">
                        <div className="overlap-group-2">
                            <div className="subhead1">Things To Do <input type="text" className="location-text" placeholder="Enter your location" name="" id="" /></div>
                            <div className="subhead2">currently near you</div>
                        </div>
                        <div className="card-items">
                            <img className="tain-sub" alt="Group" src={group9} />
                            <img className="tain-sub" alt="Group" src={group11} />
                            <img className="tain-sub" alt="Group" src={group12} />
                            <img className="tain-sub" alt="Group" src={group13} />
                            <img className="tain-sub" alt="Group" src={group14} />
                            <img className="tain-sub-1" alt="Group" src={group10} />
                        </div>
                    </div>
                    <img className="back-to-2" alt="Back to" src={nextpagecopy} />
                    <img className="next-page-2" alt="Next page" src={nextpage} />
                </div>

                {/* Food Near You */}
                <div className="overlap-group">
                    <div className="group">
                        <div className="overlap-2">
                            <div className="subhead1">Food <input className="location-text" placeholder="Enter your location" type="text" name="" id="" /></div>
                            <div className="subhead2">currently near you</div>
                        </div>
                        <div className="card-items">
                            <img className="tain-sub" alt="Group" src={Food1} />
                            <img className="tain-sub" alt="Group" src={Food1} />
                            <img className="tain-sub" alt="Group" src={Food1} />
                            <img className="tain-sub" alt="Group" src={Food1} />
                            <img className="tain-sub" alt="Group" src={Food1} />
                            <img className="tain-sub-1" alt="Group" src={Food1} />
                        </div>
                    </div>
                    <img className="back-to-2" alt="Back to" src={nextpagecopy} />
                    <img className="next-page-2" alt="Next page" src={nextpage} />
                </div>

                <div className="contactus">
                    <div className="contactus-sub">CONTACT US</div>
                </div>
            </div>
        </div>
    );
};

export default Home
