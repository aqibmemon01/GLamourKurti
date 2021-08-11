import React from 'react';
import './styles.css';
import Nav from '../components/NavBar'

export default function Home() {
    return( 
        <div><Nav />
        <div className="container">  
        <header>
        <div className="headerText" >
          <div>
          <h1>Welcome to Glamour Kurti House</h1>
          <p>Enjoy Online Shopping with Us! </p>
          </div>
        </div>
    </header>

<div className="middleHead">
<h1 >Our Best Sellers</h1>
</div>






        <div className="products">
        {[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9].map((product) => (
          <div className="product" key={"product.id"}>
            <div className="product-image">
            {/* {product.status === 'hot' ?  <div className="hot">Hot</div> : ''} */}
              {/* {product.status === 'new' ?  <div className="new">New</div> : ''} */}
             <div className="new">New</div> 
              <img src={require('../images/glamour/pic01.jpeg')} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                {"Flamingo"}
              </div>
              <div className="product-price">
                Rs.{'5800'}
              </div>
            </div>            
              {/* <div className="add-to-cart" 
            >
                Add to Cart</div>  */}
              
          </div>
        ))}       
      </div>
      </div>
      </div>
    )
}