import { Button, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import useHttp2 from '../../../hooks/useHttp2';
import classes from './Additional.module.css'
import Notice_Info from './components/Notice_Info';
import useHttpForm from '../../../hooks/useHttpForm';
import { BASE_API } from '../../../utils/BASE_URL';

const EditNotice = () => {


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

        if (values.file) {
            formData.append('file', values.file.file)
        }

        sendRequest({
            url: `notice/${id}`,
            method: 'PATCH',
            body: formData
        }, result => {
            navigate('/notice')
        }, true)
    }

    useEffect(() => {
        sendRequest({
            url: `notice/${id}`
        }, result => {
            form.setFieldValue('label',result.data.label)
            setFile([{
                uid:'-1',
                name:'file',
                status:'done',
                url:`${BASE_API}/${result.data.file}`
            }])
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
            <Button loading={isLoading} htmlType='submit' className={classes.bottom_btn} type='primary' size='large'>Edit Update</Button>
        </Form >
    )
}

export default EditNotice