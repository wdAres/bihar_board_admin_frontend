import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const S_Address = () => {

    const inputFields = [
        {
            label: 'School District',
            name: 'school_district',
            rules: [
                { required: true, message: 'School District is required' },
                { min: 2, message: 'School District must be at least 2 characters' },
                { max: 50, message: 'School District cannot exceed 50 characters' },
                { pattern: /^[a-zA-Z\s]+$/, message: 'School District should only contain letters and spaces' }
            ],
            element: (data) => <Input {...data} />
        },
        {
            label: 'School Pincode',
            name: 'school_pincode',
            rules: [
                { required: true, message: 'School Pincode is required' },
                { pattern: /^[1-9][0-9]{5}$/, message: 'School Pincode must be a valid 6-digit number' }
            ],
            element: (data) => <Input maxLength={6} {...data} />
        },
        {
            label: 'School Address',
            name: 'center_address',
            rules: [
                { required: true, message: 'School Address is required' },
                { min: 10, message: 'School Address must be at least 10 characters' },
                { max: 200, message: 'School Address cannot exceed 200 characters' }
            ],
            element: (data) => <Input.TextArea {...data} />
        }
    ];
    
    return (
        <Card
            size="small"
            title="School Address"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default S_Address