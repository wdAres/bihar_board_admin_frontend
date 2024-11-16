import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const S_Security = () => {

    const inputFields = [
        {
            label: 'Login Email',
            name: 'email',
            rules: [{ required: true }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'Login Password',
            name: 'password',
rules: [{ required: true }],
            element: (data) => <Input.Password {...data} />
        },
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
rules: [{ required: true }],
            element: (data) => <Input.Password  {...data} />
        },
        
    ]
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