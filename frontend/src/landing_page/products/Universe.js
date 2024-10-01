import React from 'react'
function Universe() {
    return (  
        <div className="container mt-5 mb-5">
          <div className="row text-center">
             <h1>The Zerodha Universe</h1>
             <p>Extend your trading and investment experience even further with our partner platforms</p>
              <div className="col-4 p-3 mt-5">
                 <img src="media\images\smallcaseLogo.png"  alt="smallcase" />
                 <p className="text-small text-muted">Thematic Invest Platform</p>
              </div>
              <div className="col-4 p-3 mt-5">
                <img src="media\images\streakLogo.png"  style={{width:"50%"}} alt="fund" />
                <p className="text-small text-muted">Algo & strategy platform</p>
              </div>
              <div className="col-4 p-3 mt-5">
              <img src="media\images\sensibullLogo.svg"  alt="fund" />
              <p className="text-small text-muted">option Trading platform</p>  
              </div>

              <div className="col-4 p-3 mt-5">
                 <img src="media\images\zerodhaFundhouse.png" style={{width:"60%"}} alt="smallcase" />
                 <p className="text-small text-muted">Asset management</p>
              </div>
              <div className="col-4 p-3 mt-5">
                <img src="media\images\goldenpiLogo.png"  alt="fund" />
                <p className="text-small text-muted">Bonds Trading platform</p>
              </div>
              <div className="col-4 p-3 mt-5">
              <img src="media\images\dittoLogo.png" style={{width:"50%"}} alt="fund" />
              <p className="text-small text-muted">insure</p>  
              </div>
              <button className='p-2 btn btn-primary fs-5 mb-5'style={{width:"25%" ,margin:"0 auto"}}>Sign up for Free</button>
        </div>
        </div>
    );
}

export default Universe;