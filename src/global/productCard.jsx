import React from 'react'

const ProductCard = ({ image, title, rating, price }) => {
    return (
        <div className="product_card">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <h2 className="title">
                {title}
            </h2>
            <p className="rating">
                {rating}/ <span>5</span>
            </p>
            <p className="price">
                ${price}
            </p>
        </div>
    )
}

export default ProductCard