import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const S_Security = () => {

    const inputFields = [
        {
            label: 'Login Email',
            name: 'email',
            rules: [
                { required: true, message: 'Email is required' },
                { type: 'email', message: 'The input is not a valid email' }
            ],
            element: (data) => <Input {...data} />
        },
        {
            label: 'Login Password',
            name: 'password',
            rules: [
                { required: true, message: 'Password is required' },
                { min: 8, message: 'Password must be at least 8 characters' },
                { pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, message: 'Password must include uppercase, lowercase, number, and special character' }
            ],
            element: (data) => <Input.Password {...data} />
        },
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
            rules: [
                { required: true, message: 'Confirm Password is required' },
                // Custom validation rule to check if passwords match
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords do not match'));
                    }
                })
            ],
            element: (data) => <Input.Password {...data} />
        }
    ];
    
    return (
        <Card
            size="small"
            title="Credentials"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default S_Security