// TipCalculator.tsx

import React, { useState } from 'react';

const TipCalculator: React.FC = () => {
    // Состояния:
    const [billAmount, setBillAmount] = useState<number>(0);
    const [tipPercentage, setTipPercentage] = useState<number>(15);
    const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

    // Обработчики изменений:
    const handleBillAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setBillAmount(isNaN(value) ? 0 : value);
    };

    const handleTipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setTipPercentage(isNaN(value) ? 0 : value);
    };

    const handleNumberOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setNumberOfPeople(isNaN(value) || value < 1 ? 1 : value);
    };

    // Вычисляемые значения:
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const tipPerPerson = tipAmount / numberOfPeople;
    const totalPerPerson = totalAmount / numberOfPeople;

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Калькулятор чаевых</h2>

            <div>
                <label htmlFor="billAmount">Сумма счета:</label>
                <input
                    type="number"
                    id="billAmount"
                    value={billAmount === 0 ? '' : billAmount}
                    onChange={handleBillAmountChange}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px' }}
                />
            </div>

            <div>
                <label htmlFor="tipPercentage">Процент чаевых:</label>
                <input
                    type="number"
                    id="tipPercentage"
                    value={tipPercentage}
                    onChange={handleTipPercentageChange}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px' }}
                />
            </div>

            <div>
                <label htmlFor="numberOfPeople">Количество человек:</label>
                <input
                    type="number"
                    id="numberOfPeople"
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px' }}
                />
            </div>

            <div>
                <h3>Результаты:</h3>
                <p>Сумма чаевых: ${tipAmount.toFixed(2)}</p>
                <p>Общая сумма: ${totalAmount.toFixed(2)}</p>
                <p>Чаевых на человека: ${tipPerPerson.toFixed(2)}</p>
                <p>Всего на человека: ${totalPerPerson.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default TipCalculator;
