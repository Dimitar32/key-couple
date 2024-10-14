import React, { useState } from 'react';
import './FAQ.css';

const questionsAnswers = [
    { question: 'Как мога да поръчам?', answer: 'Можете да поръчате директно през уебсайта ни или по телефона.' },
    { question: 'За колко време пристигат нашите ключодържатели?', answer: 'Вашата поръчка ще бъде обработена между 1 и 3 работни дена.' },
    { question: 'Какви са методите за плащане?', answer: 'Приемаме различни методи за плащане, включително по Revolut, банков превод, наложен платеж при вземане от куриер. За повече информация ни пишете на лично в Instagram - @ или на телефон +359 879330389.' },
    { question: 'Колко ключа може да побере?', answer: 'Нашите ключодържатели са проектирани да държат множество ключове на всеки ключодържател, което ги прави идеални както за малки, така и за големи ключодържатели. От 2 до 15 ключа.' },
    { question: 'Лесно ли е за инсталиране?', answer: 'Да, нашите Disney ключодържатели са много лесни за инсталиране. Можете да ги закрепите с включеното двойно залепващо тиксо или, ако предпочитате, може да ги забиете в стената за допълнителна стабилност.' },
    { question: 'Има ли отстъпки при закупуване на по-големи количества?', answer: 'Да, предлагаме отстъпки при закупуване на по-големи количества.Свържете се с нас за повече информация.' },
    { question: 'Мога ли да сменя адреса за доставка след като съм направил поръчка?', answer: 'Ако поръчката ви все още не е изпратена, можете да се свържете с нас на телефон 0879330389, и ние ще го актуализираме.' }

        
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section id="faq" className="faq-section">
            <h2>Често задавани въпроси</h2>
            {questionsAnswers.map((qa, index) => (
                <div key={index} className="faq-item">
                    <button onClick={() => toggleAnswer(index)} className="faq-question">{qa.question}</button>
                    <p className={activeIndex === index ? "faq-answer active" : "faq-answer"}>{qa.answer}</p>
                </div>
            ))}
        </section>
    );
};

export default FAQ;