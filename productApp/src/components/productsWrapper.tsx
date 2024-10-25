import React,{ReactNode} from "react";
import './products.css';
type productsWrapperProps = {
    shoedetails: ReactNode;
    shoeName: ReactNode;
    // children: ReactNode;    

    };
const ProductsWrapper: React.FC<productsWrapperProps> = ({shoedetails,shoeName}) => {
    return (
        <div className="product-wrapper">
              <div className="product-name">
                {shoeName}
            </div>
            <div className="product-details">
                {shoedetails}
            </div>
          
        </div>
    ); 
}
export default ProductsWrapper;