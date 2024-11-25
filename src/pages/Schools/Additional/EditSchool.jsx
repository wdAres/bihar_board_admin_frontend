import { Button, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import useHttp2 from '../../../hooks/useHttp2';
import S_Info from './components/S_Info';
import S_Status from './components/S_Status';
import S_Address from './components/S_Address';
import classes from './Additional.module.css'
import PageHeader from '../../../components/UI/PageHeader';

const EditSchool = () => {


    const [form] = Form.useForm();
    const { sendRequest, isLoading } = useHttp2()
    const navigate = useNavigate()
    const {id} = useParams()


    const handleForm = (values) => {

        sendRequest({
            url: `center/${id}`,
            method: 'PATCH',
            body: {...values,role:'center'}
        }, result => {
            navigate('/school')
        }, true)
    }

    useEffect(()=>{
        sendRequest({
            url:`center/${id}`
        },res=>{
            form.setFieldsValue(res.data)
        })
    },[])

    return (
        <>
        <PageHeader cls={'form_heading'} heading={'Edit School'} >
          <Button onClick={() => navigate(-1)} htmlType='button' type='default'  >Back</Button>
        </PageHeader>
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
                </Col>
            </Row>
            <Button loading={isLoading} htmlType='submit' className={classes.bottom_btn} type='primary' size='large'>Update School</Button>
        </Form>
        </>
    )
}

export default EditSchool