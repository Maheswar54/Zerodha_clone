import React from 'react'
function Brokerage() {
    return (
        <div className="container">
          <div className="row p-5 mt-5 text-center border-top">
              <div className="col-8 p-4">
                 <a href="" style={{textDecoration:"none"}}><h3 className="fs-6 mb-2"> Brokerage Calculator </h3></a>
                 <ul style={{textAlign:"left", lineHeight:"2.5" , fontSize:"12px"}} className="text-muted">
                 <li>₹100 per order for futures and options.</li>
                 <li> For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                 <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                 <li> ₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                 </ul>
              </div>
              <div className="col-4 p-4">
              <a href="" style={{textDecoration:"none"}}><h3 className="fs-6"> List of Charges </h3></a>
              </div>

          </div>
        </div>
      );
}

export default Brokerage;