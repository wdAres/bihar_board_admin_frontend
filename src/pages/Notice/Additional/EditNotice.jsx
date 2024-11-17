import { Button, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import useHttp2 from '../../../hooks/useHttp2';
import classes from './Additional.module.css'
import Notice_Info from './components/Notice_Info';
import useHttpForm from '../../../hooks/useHttpForm';

const EditNotice = () => {


    const [form] = Form.useForm();
    const { sendRequest, isLoading } = useHttpForm()
    const navigate = useNavigate()
    const {id} = useParams()


    const handleForm = (values) => {

        const formData = new FormData()

        formData.append('label', values.label)

        if (values.file) {
            formData.append('file', values.file.file)
        }

        sendRequest({
            url: `notices/${id}`,
            method: 'PATCH',
            body: formData
        }, result => {
            navigate('/updates')
        }, true)
    }

    useEffect(() => {
        sendRequest({
            url: `notices/${id}`
        }, result => {
            form.setFieldValue('label',result.data.label)
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
                    <Notice_Info />
                </Col>
            </Row>
            <Button loading={isLoading} htmlType='submit' className={classes.bottom_btn} type='primary' size='large'>Edit Update</Button>
        </Form >
    )
}

export default EditNotice