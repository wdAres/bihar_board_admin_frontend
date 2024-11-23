import React from 'react'
import { Button, Card, Flex, Input, Select, Upload } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
import MyUpload from '../../../../components/MyUpload/MyUpload'
import { FaPlus } from 'react-icons/fa'
const Notice_Info = ({file=[],handleFiles=()=>{}}) => {

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
            dataObj: {
                maxCount: 1,
                listType:'picture-card',
                beforeUpload:x=>false,
                fileList:file,
                onChange:fileList=>handleFiles(fileList,'file')
            },
            element: (data) =>  <Upload   beforeUpload={file=>false} {...data}>
            <Flex align='center' justify='center' vertical>
            <FaPlus />
            <div className="ant-upload-text">Upload</div>
        </Flex>
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