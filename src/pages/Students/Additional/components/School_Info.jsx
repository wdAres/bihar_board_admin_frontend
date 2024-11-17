import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const School_Info = () => {

    const inputFields = [
        {
            label: 'School Category',
            name: 'school_category',
            rules: [{ required: true }],
            dataObj: {
                options: [{ label: 'Category 429', value: '429' }, { label: 'Category 223', value: '223' }, { label: 'Category 3776', value: '3776' }, { label: 'Category 711', value: '711' }, { label: 'Category 69', value: '69' }]
            },
            element: (data) => <Select {...data} />
        },
        { label: 'School Name', name: 'school_name', rules: [{ required: true }], element: (data) => <Input {...data} /> },
        { label: 'School Address', name: 'school_address', rules: [{ required: true }], element: (data) => <Input {...data} /> },
        { label: 'School Pincode', name: 'school_pincode', rules: [{ required: true }], element: (data) => <Input {...data} /> },
        { label: 'School Principal Email', name: 'school_principal_email', rules: [{ required: true, type: 'email' }], element: (data) => <Input {...data} /> },
        { label: 'School Principal Mobile', name: 'school_principal_mobile', rules: [{ required: true }], element: (data) => <Input {...data} /> },
    ];


    return (
        <Card
            size="small"
            title="School Information"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default School_Info