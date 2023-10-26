import React from 'react'
import '../Css/Order.css'

const Order = () => {
    return (
        <div className='main-order'>
            <div className="flexconn">
                <div className="method">
                    <p className="method-header">Payment Method</p>
                    <div className="method-types">
                        <p className="method-type-item" style={{}}>Cash  <input type="radio" name="" id="" style={{ marginLeft: "500px", fontSize: "larger" }} /></p>
                        <p className="method-type-item" style={{}}>Paytm/ UPI <input type="radio" name="" id="" style={{ marginLeft: "440px", fontSize: "larger" }} /></p>
                        <p className="method-type-item" style={{}}>Net Banking <input type="radio" name="" id="" style={{ marginLeft: "430px", fontSize: "larger" }} /></p>
                        <p className="method-type-item" style={{}}>Credit/ Debit Card <input type="radio" name="" id="" style={{ marginLeft: "380px", fontSize: "larger" }} /></p>
                        <p className="method-type-item" style={{}}>Wallet <input type="radio" name="" id="" style={{ marginLeft: "487px", fontSize: "larger" }} /></p>
                    </div>
                </div>
                <div className="address">
                    <p className="address-header">Address</p>
                    <input className="location-text" placeholder="Enter Train Number" type="text" name="" id="" style={{ width: "500px", marginBottom: "10px", height: "50px", backgroundColor: 'lightgrey', paddingLeft: "25px", borderRadius: "50px", marginLeft: "90px" }} />
                    <input className="location-text" placeholder="Enter Seat Number" type="text" name="" id="" style={{ width: "500px", height: "50px", backgroundColor: 'lightgrey', paddingLeft: "25px", borderRadius: "50px", marginLeft: "90px" }} />
                    <p style={{ textAlign: "right", marginTop: "400px", color: "Blue", fontSize: "xxx-large", fontWeight: "Bold", cursor: "pointer" }}>Proceed &gt;&gt;</p>
                </div>

            </div>
        </div>
    )
}

export default Order
