import { Button, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import useHttp2 from '../../../hooks/useHttp2';
import classes from './Additional.module.css'
import Notice_Info from './components/Notice_Info';
import useHttpForm from '../../../hooks/useHttpForm';

const EditImpLink = () => {


    const [form] = Form.useForm();
    const { sendRequest, isLoading } = useHttpForm()
    const navigate = useNavigate()
    const {id} = useParams()

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

        formData.append('label', values.label)
        formData.append('url', values.url)


        sendRequest({
            url: `important-link/${id}`,
            method: 'PATCH',
            body: formData
        }, result => {
            navigate('/notice')
        }, true)
    }

    useEffect(() => {
        sendRequest({
            url: `important-link/${id}`
        }, result => {
            form.setFieldValue('label',result.data.label)
            form.setFieldValue('url',result.data.url)
           
        })
    }, [])


    return (
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
            <Button loading={isLoading} htmlType='submit' className={classes.bottom_btn} type='primary' size='large'>Edit Important Link</Button>
        </Form >
    )
}

export default EditImpLink