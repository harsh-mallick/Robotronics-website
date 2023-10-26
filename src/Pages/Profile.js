import React from 'react'
import '../Css/Profile.css'
import profile from '../Images/profile.jpeg'

const Profile = () => {
    return (
        <div className='main-order'>
            <div className="flexconn1">
                <div className="prof">
                    <img src={profile} alt="" width={'250px'} height={"220px"} style={{ borderRadius: "50%", marginLeft: "200px", boxShadow: "10px 10px 10px rgb(30, 30, 30)" }} />
                    <p className="prof-type-item" style={{}}>Name:  </p>
                    <p className="prof-type-item" style={{}}>Email: </p>
                    <p className="prof-type-item" style={{}}>Phone Number: </p>
                </div>
                <div className="details">
                    <div className="details-types">
                        <p className="details-type-item" style={{}}>Account Details </p>
                        <p className="details-type-item" style={{}}>Previously Purchased </p>
                        <p className="details-type-item" style={{}}>Payments </p>
                        <p className="details-type-item" style={{}}>Seat Numbers  </p>
                        <p className="details-type-item" style={{}}>Contact Us </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
