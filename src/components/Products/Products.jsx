import React from 'react';
import './Products.css';
import Ariel from './Ariel.png';
import Shrek from './Shrek.png';
import Rapunzel from './Rapunzel.png';
import LionKing from './Lion King.png';

const products = [
    { id: 1, name: 'Ерик и Ариел', oldPrice: '35.99 лв', price: '25.99 лв', imageUrl: Ariel },
    { id: 2, name: 'Шрек и Фиона', oldPrice: '35.99 лв', price: '25.99 лв', imageUrl: Shrek }/*,
    { id: 4, name: 'Нала и Симба', oldPrice: '35.99 лв', price: '25.99 лв', imageUrl: LionKing }*/
];

const blurProducts = [
    { id: 3, name: 'Рапунцел и Флин', oldPrice: '??.?? лв', price: 'Очаквайте скоро', imageUrl: Rapunzel }
];

const Products = () => {
    return (
        <section id="products" className="products-section">
            <h2 className="products-title">Продукти</h2>
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <h3>{product.name}</h3>
                    <p className="old-price">{product.oldPrice}</p> {/* Показване на старата цена със зачеркване */}
                    <p className="new-price">{product.price}</p> {/* Показване на новата цена */}
                </div>
            ))}
            {blurProducts.map(product => (
                <div key={product.id} className="product-card coming-soon">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <div class="overlay">
                        <h3>{product.name}</h3>
                        <p className="old-price">{product.oldPrice}</p> {/* Показване на старата цена със зачеркване */}
                        <p className="new-price">{product.price}</p> {/* Показване на новата цена */}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Products;
