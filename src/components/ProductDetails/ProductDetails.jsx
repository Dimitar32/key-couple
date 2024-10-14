import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import Ariel from '../Products/Ariel.png';
import Shrek from '../Products/Shrek.png';
import Rapunzel from '../Products/Rapunzel.png';
import LionKing from '../Products/Lion King.png';

const products = [
    { id: 1, name: 'Ерик и Ариел', price: '25.99 лв', imageUrl: Ariel, description: 'Красив ключодържател с героите Ерик и Ариел.' },
    { id: 2, name: 'Шрек и Фиона', price: '25.99 лв', imageUrl: Shrek, description: 'Забавен ключодържател с Шрек и Фиона.' },
    { id: 3, name: 'Рапунцел и Флин', price: '25.99 лв', imageUrl: Rapunzel, description: 'Романтичен ключодържател с Рапунцел и Флин.' },
    { id: 4, name: 'Нала и Симба', price: '25.99 лв', imageUrl: LionKing, description: 'Ключодържател с Нала и Симба, героите от "Цар Лъв".' }
];

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Продуктът не е намерен</h2>;
    }

    return (
        <section id="products" className="product-details-section">
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <p className="product-price">Цена: {product.price}</p>
            <p className="product-description">{product.description}</p>
        </section>
    );
};

export default ProductDetails;
