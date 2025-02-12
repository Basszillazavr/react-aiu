import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const Task1: React.FC = () => {
    // **useState**: Управление состоянием задач.

    // 1. Создайте состояние `tasks` (Task[]) и функцию `setTasks` для обновления списка задач.
    //    Начните с пустого массива.
    const [tasks, setTasks] = useState<Task[]>([]); // Замените это TODO

    // 2. Создайте состояние `newTaskText` (string) и функцию `setNewTaskText` для управления
    //    текстом новой задачи, вводимой пользователем. Начните с пустой строки.
    const [newTaskText, setNewTaskText] = useState(''); // Замените это TODO

    // **useEffect**:  Эффекты для загрузки/сохранения задач (имитация работы с localStorage).

    // 3. Используйте `useEffect`, чтобы при монтировании компонента загрузить задачи из localStorage.
    //    Предположим, что они хранятся там под ключом "tasks". Если в localStorage ничего нет,
    //    начните с пустого массива.  Не забудьте обработать случай, когда данные в localStorage
    //    не являются валидным JSON.
    useEffect(() => {
        // TODO: Загрузите задачи из localStorage
    }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании.


    // 4. Используйте `useEffect`, чтобы сохранять задачи в localStorage при каждом изменении
    //    массива `tasks`.
    useEffect(() => {
        // TODO: Сохраните задачи в localStorage
    }, [tasks]); // `tasks` - зависимость, эффект выполняется при каждом изменении `tasks`.


    // **useRef**:  Фокус на поле ввода.

    // 5. Создайте `useRef` для ссылки на поле ввода (`<input>`).
    const inputRef = useRef<HTMLInputElement>(null); // Замените это TODO


    // **useCallback**:  Оптимизация функций для предотвращения ненужных перерендеров.

    // 6. Создайте функцию `addTask` с помощью `useCallback`.  Она должна:
    //    - Добавлять новую задачу в массив `tasks` с текстом из `newTaskText`.
    //    - Очищать поле ввода `newTaskText`.
    //    - Устанавливать фокус на поле ввода.
    //    - Каждая новая задача должна иметь уникальный `id`.
    const addTask = useCallback(() => {
        // TODO: Реализуйте добавление задачи
    }, [newTaskText, inputRef, setTasks]);


    // 7. Создайте функцию `toggleComplete` с помощью `useCallback`. Она должна:
    //    - Переключать состояние `completed` у задачи с заданным `id`.
    //    - Использовать функциональное обновление состояния для `tasks`.
    const toggleComplete = useCallback((id: number) => {
        // TODO: Реализуйте переключение состояния completed
    }, [setTasks]);


    // **useMemo**:  Кэширование вычисляемых значений.

    // 8. Создайте вычисляемое значение `completedTasksCount` с помощью `useMemo`.  Оно должно
    //    возвращать количество завершенных задач.
    const completedTasksCount = useMemo(() => {
        // TODO: Вычислите количество завершенных задач
        return 0; // Замените это TODO
    }, [tasks]);


    // **Обработчики событий**:

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addTask();
    };


    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h1>Список задач</h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newTaskText}
                    onChange={handleInputChange}
                    ref={inputRef}
                    placeholder="Добавить новую задачу"
                    style={{ padding: '8px', marginRight: '10px', width: '70%', boxSizing: 'border-box' }}
                />
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Добавить
                </button>
            </form>

            {tasks.length === 0 ? (
                <p>Задач нет.</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleComplete(task.id)}
                                    style={{ marginRight: '8px' }}
                                />
                                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            )}

            <p>Завершено задач: {completedTasksCount}</p>
        </div>
    );
};

export default Task1;
