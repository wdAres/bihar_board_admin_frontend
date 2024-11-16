import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const S_Address = () => {

    const inputFields = [
        {
            label: 'School District',
            name: 'school_district',
           rules: [{ required: true }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'School Pincode',
            name: 'school_pincode',
           rules: [{ required: true }],
            element: (data) => <Input {...data} />
        },
        
    ]
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