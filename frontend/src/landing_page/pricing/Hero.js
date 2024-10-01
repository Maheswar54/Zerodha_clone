import React from 'react'
function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
             <h1>Pricing</h1>
             <h4 className="text-small text-muted mt-3 fs-4">free equity investments and ₹20 trady and trades</h4>
            </div>
            <div className="row p-5 mt-5 text-center">
               <div className="col-4">
                 <img src="media\images\pricingEquity.svg" alt="pr"/>
                 <h1 className="fs-4"> Free equity delivery</h1>
                 <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                
               </div>
               <div className="col-4">
               <img src="media\images\intradayTrades.svg"/>
               <h1 className="fs-4"> intradayTrades</h1>
               <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                
                
               </div>
               <div className="col-4">
               <img src="media\images\pricingMF.svg"/>
               <h1 className="fs-4"> Free Direct MF</h1>
               <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                 
               </div>
            </div>

        </div>
     );
}

export default Hero;