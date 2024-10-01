import React from 'react'
function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                  <div className='col-6 p-5'>
                 <img src='media/images/largestBroker.svg' />
                  </div>
                  <div className='col -6 p-5 mt-5'>
                    <h1>Largest Stock Broker in India</h1>
                <p className='mb-5'>2+ million Zerodha Clients Contributed to over 15% of volumes by trading and Investing</p>
                <div className='row'>
                    <div className='col -6'>
                        <ul>
                            <li>
                                <p>Future and options</p>
                            </li>
                            <li>
                                <p>Commodoty derivatives</p>
                            </li>
                            <li>
                                 <p>Currency Derivatives</p>
                            </li>

                        </ul>
                    </div>
                    <div className='col -6'>
                        <ul>
                            <li>
                                <p>Stock and ipos</p>
                            </li>
                            <li>
                                <p>Direct Mutual funds</p>
                            </li>
                            <li>
                                 <p>Bonds and Securities</p>
                            </li>

                        </ul>  
                    </div>
                    <img src='media\images\pressLogos.png' style={{width:"90%"}}/>
                </div>
                
                  </div>
            </div>

        </div>
     );
}

export default Awards;