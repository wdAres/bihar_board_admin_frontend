import { Button, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import useHttp2 from '../../../hooks/useHttp2';
import classes from './Additional.module.css'
import S_Info from './components/Student_Info';
import School_Info from './components/School_Info';
import Center_Info from './components/Center_Info';
import useHttpForm from '../../../hooks/useHttpForm';
import Upload_Docuements from './components/Upload_Documents';
import moment from 'moment';

const EditStudent = () => {


    const [form] = Form.useForm();
    const { sendRequest, isLoading } = useHttpForm()
    const navigate = useNavigate()
    const {id} = useParams()


    const handleForm = (values) => {

        const formData = new FormData()

        if (values.student_photo && values.student_photo.file) {
            formData.append('student_photo', values.student_photo.file);
        }
        
        if (values.student_signature && values.student_signature.file) {
            formData.append('student_signature', values.student_signature.file);
        }
        
        if (values.center_signature && values.center_signature.file) {
            formData.append('center_signature', values.center_signature.file);
        }
        
        if (values.school_principal_signature && values.school_principal_signature.file) {
            formData.append('school_principal_signature', values.school_principal_signature.file);
        }
        
        if (values.parent_signature && values.parent_signature.file) {
            formData.append('parent_signature', values.parent_signature.file);
        }
        

        delete values.student_signature
        delete values.student_photo
        delete values.parent_signature
        delete values.center_signature
        delete values.school_principal_signature

        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                formData.append(key, values[key]);
            }
        }

        sendRequest({
            url: `students/${id}`,
            method: 'PATCH',
            body: formData
        }, result => {
            navigate('/student')
        }, true)
    }

    useEffect(()=>{
        sendRequest({
            url:`students/${id}`,
        },result=>{
            form.setFieldsValue(result.data)
            form.setFieldValue('dob_in_figures', moment(new Date).format('YYYY-MM-DD'))
        })
    },[])


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
                </Col>
                <Col
                    xs={{
                        span: 24,
                    }}
                    lg={{
                        span: 9,
                    }}
                    className={classes.my_flex}>
                    <School_Info />
                    <Center_Info />
                    <Upload_Docuements />
                </Col>
            </Row>
            {/* <Button loading={isLoading} htmlType='submit' className={classes.bottom_btn} type='primary' size='large'>Edit Student</Button> */}
            <Button loading={isLoading}  htmlType='button' className={classes.bottom_btn} onClick={()=>navigate(-1)} size='large'>Back</Button>
        </Form>
    )
}

export default EditStudent
