// MyForm.tsx
import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Select } from 'antd';
import type { SelectProps } from 'antd';

interface MyFormProps {}

const MyForm: React.FC<MyFormProps> = () => {
    // 1. Создайте состояние `form` (объект) и функцию `setForm` для хранения значений полей формы.
    //    Начните с объекта с пустыми значениями для каждого поля (например, { name: '', email: '', profession: '' }).
    const [form, setForm] = useState<{ name: string; email: string; profession: string }>({
        name: '',
        email: '',
        profession: '',
    }); // TODO: Замените это

    // 2. Создайте функцию `handleInputChange` с помощью `useCallback`. Она должна:
    //    - Принимать `event.target.name` и `event.target.value` в качестве аргументов.
    //    - Обновлять состояние `form` так, чтобы поле с именем `name` имело значение `value`.
    //    - Использовать функциональное обновление состояния (prevForm => ...).
    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            // TODO: Реализуйте обновление состояния формы
        },
        []
    );

    // 3. Создайте функцию `handleSelectChange` с помощью `useCallback`. Она должна:
    //    - Принимать `value` (значение, выбранное в Select) и `name` (имя поля) в качестве аргументов.
    //    - Обновлять состояние `form` так, чтобы поле с именем `name` имело значение `value`.
    //    - Использовать функциональное обновление состояния (prevForm => ...).

    const handleSelectChange = useCallback((value: string, name: string) => {
        // TODO: Реализуйте обновление состояния формы при выборе в Select
    }, []);

    // 4. Создайте функцию `handleSubmit` с помощью `useCallback`.  Она должна:
    //    - Предотвратить стандартное поведение формы (event.preventDefault()).
    //    - Вывести в консоль текущее состояние `form`.
    //    - (В реальном приложении здесь будет логика отправки данных на сервер).
    const handleSubmit = useCallback(
        (event: React.FormEvent) => {
            event.preventDefault();
            // TODO: Реализуйте отправку формы
        },
        [form]
    );

    const options: SelectProps['options'] = [
        {
            value: 'developer',
            label: 'Разработчик',
        },
        {
            value: 'designer',
            label: 'Дизайнер',
        },
        {
            value: 'tester',
            label: 'Тестировщик',
        },
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Форма с Ant Design</h2>
            <Form onFinish={handleSubmit}>
                <Form.Item label="Имя">
                    <Input name="name" value={form.name} onChange={handleInputChange} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input name="email" type="email" value={form.email} onChange={handleInputChange} />
                </Form.Item>
                <Form.Item
                    name="profession" label="Профессия">
                    <Select
                        value={form.profession}
                        onChange={(value: any) => handleSelectChange(value, "profession")}
                        options={options}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default MyForm;
