import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const Center_Info = () => {

    const inputFields = [
            { label: 'Center Name', name: 'center_name', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Center Address', name: 'center_address', rules: [{ required: true }], element: (data) => <Input {...data} /> }
        ]
    
    return (
        <Card
            size="small"
            title="Center Information"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default Center_Info