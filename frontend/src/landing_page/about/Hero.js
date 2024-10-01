import React from "react";
function Hero() {
  return (
    <div className="container mt-5 p-5">
        <div className = "row p-5 mb-5">
      <h1 className=" fs-4 text-center ">
        
        We pioneered the discount broking model in India. Now, we are breaking
        ground with our technology.
      </h1>
      </div>
      <div className="row p-5 mt-5 border-top">
         <div className="col-6 p-5 text-muted " style={{lineHeight:"1.8",fontSize:"14p"}}>
           <p className="mb-3">
           We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
           </p>
           <p className="mb-3">
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
           </p>
           <p>
           Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
           </p>
         </div>
         <div className="col-6 p-5 text-muted " style={{lineHeight:"1.8",fontSize:"14px"}}>
         <p className="mb-3">
           In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
         </p>
         <p className="mb-3">
         Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
         </p>
         <p>
           And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
         </p>
         </div>
      </div>
      <div className="container border-top">
        <h1 className="text-center mt-5 mb-5">People</h1>
        <div className="row mt-5">
        <div className="col-6 text-center">
          <img src="media\images\mahesh.jpeg" alt="mahesh" style={{borderRadius:"90%",width:"50%"}}/>
          <h4 style={{fontSize:"15px"}}>Mahesh</h4>
          <h5 style={{fontSize:"10px"}}>Student</h5>
        </div>
        <div className="col-6" style={{lineHeight:"1.8",fontSize:"14px"}}>
         <p className="mb-3">
            I'm a final-year B.Tech student in the IT department at VVIT College, passionate about designing web applications and engaging in competitive programming. In my free time, I enjoy listening to music. My favorite person is Virat Kohli, whose "never give up" attitude inspires me greatly.
        </p>
        <p className="mb-3">
        I am an NCC cadet and have secured my B certificate. Through this course, I developed both physical and  mental strength.
        </p>
        <p> Connect on  <a href="www.linkedin.com/in/gunturu-maheswara-reddy-71a617243
"> linkedin</a> </p>
        </div>
       
        </div>
      </div>
    </div>
  );
}

export default Hero;
