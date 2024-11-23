import React from 'react'
import { Button, Card, Flex, Input, Select, Upload } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
import MyUpload from '../../../../components/MyUpload/MyUpload'
import { FaPlus } from 'react-icons/fa'
const Notice_Info = ({}) => {

    const inputFields = [
        {
            label: 'Label',
            name: 'label',
            rules: [{ required: true }],
            element: (data) => <Input {...data} />
        },
        {
            label: 'Url',
            name: 'url',
            rules: [{ required: true }],
            element: (data) => <Input {...data} />
        },
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