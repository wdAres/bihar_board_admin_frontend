import { Button, Col, Form, Row } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import useHttp2 from '../../../hooks/useHttp2';
import classes from './Additional.module.css'
import Notice_Info from './components/Notice_Info';
import useHttpForm from '../../../hooks/useHttpForm';

const AddImpLink = () => {


    const [form] = Form.useForm();
    const { sendRequest, isLoading } = useHttp2()
    const navigate = useNavigate()


    const handleForm = (values) => {

        sendRequest({
            url: `important-link`,
            method: 'POST',
            body: values
        }, result => {
            navigate('/important-link')
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
                    <Notice_Info  />
                </Col>
            </Row>
            <Button loading={isLoading} htmlType='submit' className={classes.bottom_btn} type='primary' size='large'>Add Important Link</Button>
        </Form >
        </>
    )
}

export default AddImpLink