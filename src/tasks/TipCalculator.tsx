// TipCalculator.tsx

import React, { useState } from 'react';

const TipCalculator: React.FC = () => {
    // 1. Создайте состояние `billAmount` (number) и функцию `setBillAmount` для суммы счета.
    //    Начните с 0.
    const [billAmount, setBillAmount] = useState<number>(0); // TODO: Замените это

    // 2. Создайте состояние `tipPercentage` (number) и функцию `setTipPercentage` для процента чаевых.
    //    Начните с 15.
    const [tipPercentage, setTipPercentage] = useState<number>(15); // TODO: Замените это

    // 3. Создайте состояние `numberOfPeople` (number) и функцию `setNumberOfPeople` для количества человек.
    //    Начните с 1.
    const [numberOfPeople, setNumberOfPeople] = useState<number>(1); // TODO: Замените это


    // 4. Создайте обработчик `handleBillAmountChange` (React.ChangeEvent<HTMLInputElement>)
    //    для обновления состояния `billAmount`.
    //    - Получите значение из `event.target.value`.
    //    - Преобразуйте значение в число с плавающей точкой (parseFloat).
    //    - Если значение не является числом (NaN), установите `billAmount` в 0.
    const handleBillAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: Реализуйте обработчик изменения суммы счета
    };

    // 5. Создайте обработчик `handleTipPercentageChange` (React.ChangeEvent<HTMLInputElement>)
    //    для обновления состояния `tipPercentage`.
    //    - Получите значение из `event.target.value`.
    //    - Преобразуйте значение в целое число (parseInt).
    //    - Если значение не является числом (NaN), установите `tipPercentage` в 0.
    const handleTipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: Реализуйте обработчик изменения процента чаевых
    };

    // 6. Создайте обработчик `handleNumberOfPeopleChange` (React.ChangeEvent<HTMLInputElement>)
    //    для обновления состояния `numberOfPeople`.
    //    - Получите значение из `event.target.value`.
    //    - Преобразуйте значение в целое число (parseInt).
    //    - Если значение не является числом (NaN) ИЛИ значение меньше 1, установите `numberOfPeople` в 1.
    const handleNumberOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: Реализуйте обработчик изменения количества человек
    };


    // 7. Вычислите сумму чаевых (`tipAmount`) как `billAmount * (tipPercentage / 100)`.
    const tipAmount = 0; // TODO: Вычислите сумму чаевых

    // 8. Вычислите общую сумму (`totalAmount`) как `billAmount + tipAmount`.
    const totalAmount = 0; // TODO: Вычислите общую сумму

    // 9. Вычислите сумму чаевых на человека (`tipPerPerson`) как `tipAmount / numberOfPeople`.
    const tipPerPerson = 0; // TODO: Вычислите сумму чаевых на человека

    // 10. Вычислите общую сумму на человека (`totalPerPerson`) как `totalAmount / numberOfPeople`.
    const totalPerPerson = 0; // TODO: Вычислите общую сумму на человека


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
