import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const School_Info = () => {

    const inputFields = [
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