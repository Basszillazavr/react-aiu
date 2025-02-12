// MyForm.tsx
import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Select } from 'antd';
import type { SelectProps } from 'antd';

interface MyFormProps {}

const MyForm: React.FC<MyFormProps> = () => {
    const [form, setForm] = useState<{ name: string; email: string; profession: string }>({
        name: '',
        email: '',
        profession: '',
    });

    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setForm(prevForm => ({
                ...prevForm,
                [name]: value,
            }));
        },
        []
    );

    const handleSelectChange = useCallback((value: string, name: string) => {
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    }, []);

    const handleSubmit = useCallback(
        (event: React.FormEvent) => {
            event.preventDefault();
            console.log('Form values:', form);
            // Здесь можно добавить логику отправки данных на сервер
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
                <Form.Item name="profession" label="Профессия">
                    <Select
                        value={form.profession}
                        onChange={(value) => handleSelectChange(value, "profession")}
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
