import React from 'react'
function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
       <div className="p-5" id="supportWrapper">
            <h3 style={{fontSize:"16px"}}>Support portal</h3>
            <a href="" style={{fontSize:"16px"}}>Track Tickets</a>
        </div>
        <div className=" row p-5 " >
           <div className=" col-6  " >
             <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
             <input placeholder='Eg.How do I activated'/><br/>
             <a href="" style={{marginRight:"12px"}}>Track account opening</a> 
             <a href="" style={{marginRight:"12px"}}>Track segment activation</a> 
             <a href="" style={{marginRight:"12px"}}>Intraday margins </a>
             <a href="">Kite user manual</a>
            </div>
            <div className="col-6 p-5 " >
            <h1 className='fs-4'>Featured</h1>
            <ol>
                <li>
                <a href=""  style={{lineHeight:"2"}}>Surveillance measure on scrips - September 2024</a> 
                </li>
                <li>
                <a href=""  style={{lineHeight:"2"}}>Rights Entitlements listing in September 2024</a>
                </li>
            </ol>
            
              
            </div>
        </div>
        
        </section>
      );
}

export default Hero;