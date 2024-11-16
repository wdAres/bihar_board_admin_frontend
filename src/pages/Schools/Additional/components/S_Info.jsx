import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const S_Info = () => {

    const inputFields = [
        {
            label: 'School Name',
            name: 'school_name',
            rules: [{ required: true }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'School Mobile No',
            name: 'school_mobile_no',
            rules: [{ required: true }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'School Level',
            name: 'school_level',
            rules: [{ required: true }],
            dataObj: {
                options: [
                    { label: 'Primary', value: 'primary' }, { label: 'Middle', value: 'middle' }, { label: 'Secondary', value: 'secondary' }, { label: 'Senior Secondary', value: 'senior secondary' },
                ]
            },
            element: (data) => <Select {...data} />
        },
    ]
    return (
        <Card
            size="small"
            title="School Details"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default S_Info