import React from 'react'
function RightSection({imageURL,productName,productDescription,learnMore}) {
    return  (
        <div className="container mt-5 mb-5">
          <div className="row">
              <div className="col-6 mt-3">
                  <h1>{productName}</h1>
                  <p>{productDescription}</p>
                  <a href={learnMore} style={{ textDecoration:"none"}}>learn More</a>
               </div>
               <div className="col-6" >
               <img src={imageURL} style={{width:"100%"}} alt="image1"/>
              </div>
          </div>
  
        </div>
      );
}

export default RightSection;