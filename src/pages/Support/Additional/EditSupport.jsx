import { Button, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import useHttp2 from '../../../hooks/useHttp2';
import classes from './Additional.module.css'
import Support_Info from './components/Support_Info';
import PageHeader from '../../../components/UI/PageHeader';

const EditSupport = () => {

    const {id} = useParams()

    const [form] = Form.useForm();
    const { sendRequest, isLoading } = useHttp2()
    const navigate = useNavigate()
    const [status,setStatus] = useState('resolved')


    const handleForm = (values) => {

        sendRequest({
            url: `support/${id}`,
            method: 'PATCH',
            body: {
                status:'resolved'
            }
        }, result => {
            navigate('/support')
        }, true)
    }

    useEffect(()=>{
        sendRequest({
            url: `support/${id}`,
        }, result => {
            setStatus(result.data.status)
            form.setFieldsValue(result.data)
        }, true)
    },[])


    return (
        <>
        <PageHeader cls={'form_heading'} heading={'Support Query'} >
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
                        span: 24,
                    }}
                    
                    className={classes.my_flex}>
                    <Support_Info />
                </Col>
            </Row>
            {status !== 'resolved' &&
            <Button loading={isLoading}
            disabled={isLoading}
            htmlType='submit' className={classes.bottom_btn} type='primary' size='large'>Mark Resolve</Button>
}
        </Form >
                        </>
    )
}

export default EditSupport