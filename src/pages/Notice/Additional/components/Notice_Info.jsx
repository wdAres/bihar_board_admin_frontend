import React from 'react'
import { Button, Card, Input, Select, Upload } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
import MyUpload from '../../../../components/MyUpload/MyUpload'
const Notice_Info = ({handleChange}) => {

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
            rules: [{ required: false }],
            dataObj:{
                maxCount:1
            },
            element: (data) =>  <Upload   beforeUpload={file=>false} {...data}>
            <Button >Click to Upload</Button>
          </Upload>
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