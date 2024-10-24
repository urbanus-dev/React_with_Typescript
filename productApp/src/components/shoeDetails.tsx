import React,{useState} from "react";
const ShoeDetails: React.FC = () => {
const [selectedColor, setSelectedColor] = useState("black");
const [selectedSize, setSelectedSize] = useState(7);
const colors = ['black', 'blue', "red", "green"];
const sizes = [7, 8, 9, 10, 11];
return (
<div className="shoe-details">
    <h4>Product Name</h4>
    <p>More info</p>
    <p>PRODUCT DESCRIPTION</p>
    <hr />
    <hr />
    <hr />
    <div className="colors">
        {colors.map((color) => (
            <button
                key={color}
                style={{ backgroundColor: color }}
                className={color === selectedColor ? "selected" : ""}
                onClick={() => setSelectedColor(color)}
            >
                {}
            </button>
        ))}
    </div>
    
    <p>Select Size</p>
    <div className="sizes">
        {sizes.map((size) => (
            <button
                key={size}
                className={size === selectedSize ? "selected" : ""}
                onClick={() => setSelectedSize(size)}
            >
                {size}
            </button>
        ))}
    </div>
    <div className="buy_option">
    <button className="buy">BUY</button>
    <h1 className="price">$4595</h1>
    </div>
</div>
);
}


export default ShoeDetails;
