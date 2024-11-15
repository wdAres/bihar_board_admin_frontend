import React from 'react'
import ModalComp from './ModalComp'
import { Form, Input, Select } from 'antd'
import useHttp2 from '../../hooks/useHttp2'
import FormItem from '../FormItem/FormItem'
import BottomButtons from './BottomButtons'
import classes from './Modal.module.css'
const formData = [
    {
        label: 'Withdraw Amount',
        name: 'amount',
        rules: [
            {
                required: true
            }
        ],
        element: ({ data }) => <Input placeholder='Enter amount' type='number' {...data} />
    }
]

const WithdrawModal = ({ modalFunc, modalValue, refreshFunc }) => {

    const { sendRequest, isLoading } = useHttp2()

    const onFinish = (values) => {
        sendRequest({
            url: `payment/withdraw-request`,
            method: 'POST',
            body: values
        }, result => {
            modalFunc(false)
            refreshFunc()
        }, true)
    };


    const newProps = {
        modalFunc,
        modalValue,
        title: 'Withdraw Amount',
        hideOk: true,
        hideCancel: true,
        handleOk: onFinish
    }


    const bottomButtonProps = {
        cls:classes.botoomBtns,
        handleClose : ()=>modalFunc(false),
        isLoading
    }



    return (
        <ModalComp  {...newProps}>
            <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                name="basic"
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
            >
                {formData.map(element => (<FormItem key={element.name} {...element} />))}
                <BottomButtons {...bottomButtonProps} />
            </Form>
        </ModalComp>
    )
}

export default WithdrawModal
