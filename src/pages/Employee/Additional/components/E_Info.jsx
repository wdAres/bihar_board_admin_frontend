import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'

const E_Info = ({handleChange}) => {
    const inputFields = [
        {
            label: 'First Name',
            name: 'firstName',
            rules: [{ required: true, message: 'Please enter the first name' }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'Last Name',
            name: 'lastName',
            rules: [{ required: true, message: 'Please enter the last name' }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'Email',
            name: 'email',
            rules: [{ required: true, type: 'email', message: 'Please enter a valid email address' }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'Phone Number',
            name: 'phoneNumber',
            rules: [{ required: true, message: 'Please enter the phone number', len: 10 }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'Designation',
            name: 'designation',
            rules: [{ required: true, message: 'Please enter the designation' }],
            element: (data) => <Input {...data} />
        },
        
    ];
    
    return (
        <Card
            size="small"
            title="Employee Information"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default E_Info;
