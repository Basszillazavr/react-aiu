// Timer.tsx

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TimerProps {
    initialTime?: number; // Начальное время в секундах (опционально)
}

const Timer: React.FC<TimerProps> = ({ initialTime = 0 }) => {
    const [time, setTime] = useState<number>(initialTime);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = useCallback(() => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
    }, [isRunning]);

    const stopTimer = useCallback(() => {
        if (isRunning) {
            setIsRunning(false);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, [isRunning]);

    const resetTimer = useCallback(() => {
        stopTimer();
        setTime(initialTime);
    }, [stopTimer, initialTime]);

    useEffect(() => {
        // Компонент размонтирован - очищаем интервал, если он активен
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);


    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
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
