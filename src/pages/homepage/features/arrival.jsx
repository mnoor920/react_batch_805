import React from 'react'
import ProductCard from '../../../global/productCard'

const Arrival = () => {
    return (
        <div>

            <div className="top_selling">
                <h2>NEW ARRIVALS</h2>
                <div className="selling_grid">
                    <ProductCard
                        image="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        title={`Loofer English Shoes`}
                        rating={`3.5`}
                        price={`120`}
                    />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>
            <div className="top_selling">
                <h2 style={{
                    color: 'green', fontSize: '55px'
                }} >Top Selling</h2>
                <div className="selling_grid">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default Arrival