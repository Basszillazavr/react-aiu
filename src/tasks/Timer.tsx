// Timer.tsx

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TimerProps {
    initialTime?: number; // Начальное время в секундах (опционально)
}

const Timer: React.FC<TimerProps> = ({ initialTime = 0 }) => {
    // 1. Создайте состояние `time` (number) и функцию `setTime` для хранения текущего времени в секундах.
    //    Начните с `initialTime` (или 0, если `initialTime` не предоставлен).
    const [time, setTime] = useState<number>(initialTime); // TODO: Замените это

    // 2. Создайте состояние `isRunning` (boolean) и функцию `setIsRunning` для хранения состояния таймера (запущен/остановлен).
    //    Начните с `false`.
    const [isRunning, setIsRunning] = useState<boolean>(false); // TODO: Замените это

    // 3. Создайте `useRef` для хранения ID интервала (NodeJS.Timeout | null).
    //    Начните с `null`.  Этот useRef будет хранить ID, возвращаемый setInterval, чтобы можно было его очистить.
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // TODO: Замените это

    // 4. Создайте функцию `startTimer` с помощью `useCallback`.  Она должна:
    //    - Если таймер не запущен (`!isRunning`):
    //      - Установить `isRunning` в `true`.
    //      - Использовать `setInterval` для увеличения `time` на 1 каждую секунду.
    //      - Сохранить ID интервала в `intervalRef.current`.
    const startTimer = useCallback(() => {
        // TODO: Реализуйте запуск таймера
    }, [isRunning]);

    // 5. Создайте функцию `stopTimer` с помощью `useCallback`.  Она должна:
    //    - Если таймер запущен (`isRunning`):
    //      - Установить `isRunning` в `false`.
    //      - Использовать `clearInterval` для остановки таймера.
    //      - Установить `intervalRef.current` в `null`.
    const stopTimer = useCallback(() => {
        // TODO: Реализуйте остановку таймера
    }, [isRunning]);

    // 6. Создайте функцию `resetTimer` с помощью `useCallback`.  Она должна:
    //    - Остановить таймер (`stopTimer`).
    //    - Установить `time` в `initialTime`.
    const resetTimer = useCallback(() => {
        // TODO: Реализуйте сброс таймера
    }, [stopTimer, initialTime]);

    // 7. Используйте `useEffect` для очистки интервала при размонтировании компонента.
    //    - В функции возврата из `useEffect`:
    //      - Если `intervalRef.current` не равен `null`:
    //        - Использовать `clearInterval` для остановки таймера.
    useEffect(() => {
        // TODO: Реализуйте очистку интервала при размонтировании компонента

        return () => {}; // Обязательно возвращаем функцию очистки
    }, []);


    // 8. Создайте функцию `formatTime` (вне компонента) для форматирования времени в секундах в строку вида `HH:MM:SS`.
    //    - Получите часы, минуты и секунды из `seconds`.
    //    - Используйте `String(value).padStart(2, '0')` для добавления ведущих нулей.
    const formatTime = (seconds: number): string => {
        // TODO: Реализуйте форматирование времени
        return "00:00:00";
    };


    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '300px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
            <h2>Таймер</h2>
            <p style={{ fontSize: '2em' }}>{formatTime(time)}</p>

            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                <button onClick={startTimer} disabled={isRunning} style={{ padding: '8px 12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Старт
                </button>
                <button onClick={stopTimer} disabled={!isRunning} style={{ padding: '8px 12px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Стоп
                </button>
                <button onClick={resetTimer} style={{ padding: '8px 12px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Сброс
                </button>
            </div>
        </div>
    );
};

export default Timer;
