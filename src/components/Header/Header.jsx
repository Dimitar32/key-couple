import React from 'react';
import './Header.css'; // Импорт на CSS стиловете

const Header = () => {
    return (
        <header className="header">
            <h1>KeyCouple{/*Disney Keychains*/}</h1>
            {/*<h1><a href="#general-info" >Disney Keychains</a></h1>*/}
            <nav>
                {/*<a href="#general-info">Начало</a>*/}
                <a href="#products">Продукти</a>
                <a href="#order-form">Поръчай</a>
                <a href="#faq">Често задавани въпроси</a>
            </nav>
        </header>
    );
};

export default Header;
