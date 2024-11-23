import React from 'react'
import { Button, Card, Input, Select, Upload } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const Support_Info = ({handleChange}) => {

    const inputFields = [
        {
            label: 'Subject',
            name: 'subject',
            rules: [{ required: true }],
            element: (data) => <Input disabled={true} {...data} />
        },
        {
            label: 'Message',
            name: 'issue_or_message',
            rules: [{ required: false }],
            element: (data) => <Input.TextArea disabled={true}  {...data} />
        }
        ]
    return (
        <Card
            size="small"
            title="Read Support Ticket"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default Support_Info