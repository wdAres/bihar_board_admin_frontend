import { Button, Col, Form, Row } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import useHttp2 from '../../../hooks/useHttp2';
import S_Info from './components/S_Info';
import S_Security from './components/S_Security';
import S_Status from './components/S_Status';
import S_Address from './components/S_Address';
import classes from './Additional.module.css'

const AddSchool = () => {


    const [form] = Form.useForm();
    const { sendRequest, isLoading } = useHttp2()
    const navigate = useNavigate()


    const handleForm = (values) => {

        sendRequest({
            url: `auth/signup`,
            method: 'POST',
            body: {...values,role:'center'}
        }, result => {
            navigate('/school')
        }, true)
    }


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
                        span: 15,
                    }}

                    className={classes.my_flex}>
                    <S_Info />
                    <S_Address />
                </Col>
                <Col
                    xs={{
                        span: 24,
                    }}
                    lg={{
                        span: 9,
                    }}

                    className={classes.my_flex}>
                    <S_Status />
                    <S_Security />
                </Col>
            </Row>
            <Button loading={isLoading} htmlType='submit' className={classes.bottom_btn} type='primary' size='large'>Add School</Button>
        </Form>
    )
}

export default AddSchool