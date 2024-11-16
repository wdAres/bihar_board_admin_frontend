import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const Notice_Info = () => {

    const inputFields = [
        {
            label: 'Label',
            name: 'label',
            rules: [{ required: true }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'Attachment',
            name: 'file',
            rules: [{ required: true }],
            element: (data) => <Input {...data} />
        }
    ]
    return (
        <Card
            size="small"
            title="Update Details"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default Notice_Info