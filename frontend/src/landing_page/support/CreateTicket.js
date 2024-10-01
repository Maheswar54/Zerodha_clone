import React from 'react'
function CreateTicket() {
    return ( 
       <div className="container mt-5">
        <div className="row mb-4 text-center ">
            <h1 style={{fontSize:"20px"}}>To create a ticket, select a relevant topic</h1>
        </div>
          <div className="row">
             <div className="col-4">
              <h3 className="mb-3" style={{fontSize:"20px"}}><i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening</h3>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Getting started</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Online</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Offline</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Charges</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Company, Partnership and HUF</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Non Resident Indian (NRI)</a>
             </div>
             <div className="col-4">
             <h3 className="mb-3" style={{fontSize:"20px"}}><i class="fa fa-user-o" aria-hidden="true"></i>Your Zerodha Account</h3>
             <a href=""  style={{textDecoration:"none",lineHeight:"2.5"}} >Login credentials</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Profile</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Account modification and segment addition</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >CMR & DP ID</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Nomination</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Transfer and conversion of shares</a>
             </div>
             <div className="col-4">
             <h3 className="mb-3" style={{fontSize:"20px"}}>Trading and Markets</h3>
             <a href=""  style={{textDecoration:"none",lineHeight:"2.5"}} >Trading FAQs</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Kite</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Margins</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Product and order types</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Corporate actions</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Kite features</a>
            </div>
            <div  className="col-4 mt-3 mb-3">
             <h3 style={{fontSize:"20px"}}><i class="fa fa-credit-card" aria-hidden="true"></i>Funds</h3>
             <a href=""  style={{textDecoration:"none",lineHeight:"2.5"}} >Fund Withdrawl</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Adding Funds</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Adding bank accounts</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >eMandates</a><br></br>

            </div>
            <div className="col-4 mt-3 mb-3">
             <h3 className="mb-3" style={{fontSize:"20px"}}>Console</h3>
             <a href=""  style={{textDecoration:"none",lineHeight:"2.5"}} >IPO</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Portfolio</a><br></br>                   
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Funds statement</a><br></br>              
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Profile</a><br></br>                     
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Reports</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Referral program</a>
            </div>

            <div className="col-4 mt-3 mb-3">
             <h3 className="mb-3" style={{fontSize:"20px"}}><i class="fa fa-circle-o" aria-hidden="true"></i>Coin</h3>
             <a href=""  style={{textDecoration:"none",lineHeight:"2.5"}} >Understanding mutual funds and Coin</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Coin app</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Coin web</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Transactions and reports</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >National Pension Scheme (NPS)</a><br></br>
              
            </div>
             
          </div>

       </div>
     );
}

export default CreateTicket;