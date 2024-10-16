import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './OrderForm.css';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        quantityShrek: 0,
        // quantityAriel: 0,
        // quantitySimba: 0,
        quantityRapunzel: 0,
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Изпращане на имейла чрез EmailJS
        emailjs.send('service_b06m24g', 'template_m8fkc2p', formData, 'mjkXxA3GKaz2EgF9X')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Поръчката е изпратена успешно!');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Грешка при изпращането на поръчката.');
            });

        // Занули формата след успешното изпращане
        setFormData({
            fullName: '',
            phone: '',
            address: '',
            city: '',
            postalCode: '',
            country: '',
            quantityShrek: 0,
            // quantityAriel: 0,
            // quantitySimba: 0,
            quantityRapunzel: 0,
            additionalInfo: ''
        });
    };

    return (
        <section id="order-form" className="order-form-container">
            <h2>Поръчай от тук</h2>
            <form onSubmit={handleSubmit} className="order-form">
                <label>
                    Име и Фамилия:
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Телефон:
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                {/*<label>*/}
                {/*    Продукт:*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="product"*/}
                {/*        value={formData.product}*/}
                {/*        onChange={handleChange}*/}
                {/*        required*/}
                {/*    />*/}
                {/*</label>*/}
                {/* <label>
                    Брой ключодържатели Ерик и Ариел:
                    <input
                        type="number"
                        name="quantityAriel"
                        value={formData.quantityAriel}
                        onChange={handleChange}
                        min="0"
                        required
                    />
                </label> */}
                <label>
                    Брой ключодържатели Шрек и Фиона:
                    <input
                        type="number"
                        name="quantityShrek"
                        value={formData.quantityShrek}
                        onChange={handleChange}
                        min="0"
                        required
                    />
                </label>
                <label>
                    Брой ключодържатели Рапунцел и Флин:
                    <input
                        type="number"
                        name="quantityRapunzel"
                        value={formData.quantityRapunzel}
                        onChange={handleChange}
                        min="0"
                        required
                    />
                </label>
                {/* <label>
                    Брой ключодържатели Нала и Симба:
                    <input
                        type="number"
                        name="quantitySimba"
                        value={formData.quantitySimba}
                        onChange={handleChange}
                        min="0"
                        required
                    />
                </label> */}
                <label>
                    Адрес на офис на Еконт:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Град:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Поръчай</button>
            </form>
        </section>
    );
};

export default OrderForm;
