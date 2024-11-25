import { Button, Col, Form, Row } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import useHttp2 from '../../../hooks/useHttp2';
import classes from './Additional.module.css'
import Notice_Info from './components/Notice_Info';
import useHttpForm from '../../../hooks/useHttpForm';

const AddNotice = () => {


    const [form] = Form.useForm();
    const { sendRequest, isLoading } = useHttpForm()
    const navigate = useNavigate()

    const [file,setFile] = useState(null)

    const dic = {
        'file':setFile,
    }

    const handleFiles = (fileList,key)=>{
        dic[key](fileList.fileList)
        form.setFieldValue(key,fileList)
    }

    const uploadProps = {
        file,
        handleFiles
    }

    const handleForm = (values) => {

        const formData = new FormData()

        formData.append('label',values.label)
        formData.append('file',values.file.file)

        sendRequest({
            url: `notice`,
            method: 'POST',
            body: formData
        }, result => {
            navigate('/notice')
        }, true)
    }


    return (
        <>
        <Form
            scrollToFirstError
            form={form}
            layout="vertical"
            name={'basic'}
            onFinish={handleForm}
            className={``}>
            <Row
                gutter={20}
            >
                <Col
                    xs={{
                        span: 24,
                    }}
                    lg={{
                        span: 24,
                    }}

                    className={classes.my_flex}>
                    <Notice_Info {...uploadProps} />
                </Col>
            </Row>
            <Button loading={isLoading} htmlType='submit' className={classes.bottom_btn} type='primary' size='large'>Add Notice</Button>
        </Form >
        </>
    )
}

export default AddNotice