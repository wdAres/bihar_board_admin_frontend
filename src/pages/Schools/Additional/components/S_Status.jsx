import React from 'react'
import { Card, Input, Select, Switch } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const S_Status = () => {

    const inputFields = [
        {
            label: 'Status',
            name: 'active',
            rules: [{ required: true }],
            element: (data) => <Switch {...data} />
        },
        
    ]
    return (
        <Card
            size="small"
            title="Active Status"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default S_Status