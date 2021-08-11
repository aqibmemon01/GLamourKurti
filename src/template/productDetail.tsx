import React from 'react';

const ProductDetail = ({pageContext}) => {
    return(
       <div>
<h1>{pageContext.title}</h1>
<h3>{pageContext.desc}</h3>
       </div>  
    )       
}       
    
export default ProductDetail;