import React from 'react'
import classes from './Auth.module.css'
import { Button, Form, Input } from 'antd'
import useHttp2 from '../../hooks/useHttp2'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import FormItem from '../../components/FormItem/FormItem'

const inputData = [
    {
        label: "Email",
        name: "email",
        rules: [
            {
                required: true,
            }
        ],
        element: (data) => <Input {...data} />
    },
    {
        label: "Password",
        name: "password",
        rules: [
            {
                required: true,
                message: 'Please input your password!',
            },
            {
                min: 8,
                message: 'Minimum 8 characters required!'
            },
        ],
        element: ({ data }) => <Input.Password {...data} />
    }
]

const Login = () => {

    const { sendRequest, isLoading } = useHttp2()
    const navigate = useNavigate()

    const onFinish = (values) => {
        sendRequest({
            url: 'auth/login',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: values
        }, result => {
            Cookies.set('admin', JSON.stringify(result.data))
            navigate('/school')
        }, true)
    };

    return (
        <section className={classes.section}>
            <Form
                className={classes.form}
                name="basic"
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <h1 className={classes.heading}>Admin Login</h1>


                {inputData.map(element => <FormItem key={element.name} {...element} />)}

                {/* <Link style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10, color: `var(--themeColor)` }} to={'/forget'}>Forgot Password?</Link> */}

                <Form.Item
                    wrapperCol={{
                        span: 24,
                    }}
                >
                    <Button style={{ marginTop: '30px', width: '100%' }} loading={isLoading} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </section>
    )
}

export default Login