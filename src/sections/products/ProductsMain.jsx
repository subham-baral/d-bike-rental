import React from 'react';
import AllProducts from './AllProducts';
import ProductSidebar from './ProductSidebar';
const ProductsMain = () => {
  return <section className="product">
            <div className="container">
                <div className="row">
                    <AllProducts />
                    <ProductSidebar />
                </div>
            </div>
        </section>;
};
export default ProductsMain;