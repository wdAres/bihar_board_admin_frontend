import React from 'react'
import ModalComp from './ModalComp'
import { Form, Input, Select } from 'antd'
import useHttp2 from '../../hooks/useHttp2'
import FormItem from '../FormItem/FormItem'
import BottomButtons from './BottomButtons'
import classes from './Modal.module.css'
const formData = [
    {
        label: 'Subject',
        name: 'subject',
        rules: [
            {
                required: true
            }
        ],
        element: ({ data }) => <Input {...data} />
    },
    {
        label: 'Priority',
        name: 'priority',
        rules: [
            {
                required: true,
                message: 'Please select your priority!',
            }
        ],
        dataObj: {
            options: [
                {
                    label: 'High',
                    value: 'high'
                },
                {
                    label: 'Medium',
                    value: 'medium'
                },
                {
                    label: 'Low',
                    value: 'low'
                },
            ]
        },
        element: (data) => <Select {...data} />
    },
    {
        label: 'Message',
        name: 'message',
        rules: [
            {
                required: true,
            }
        ],
        element: ({ data }) => <Input.TextArea {...data} />
    },
]

const AddTicketModal = ({ modalFunc, modalValue, refreshFunc , url='' }) => {

    const { sendRequest, isLoading } = useHttp2()

    const onFinish = (values) => {
        sendRequest({
            url: `${url ? url : 'ticket'}`,
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
        title: 'Add Ticket',
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

export default AddTicketModal
