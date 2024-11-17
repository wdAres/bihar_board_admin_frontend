import React from 'react'
import { Card, DatePicker, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const S_Info = () => {

    const inputFields = [
            { label: 'Student Name', name: 'student_name', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Student Email', name: 'student_email', rules: [{ required: true, type: 'email' }], element: (data) => <Input {...data} /> },
            { label: 'Student Mobile Number', name: 'student_mobile_number', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Student Father Name', name: 'student_father_name', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Student Mother Name', name: 'student_mother_name', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Date of Birth in Figures', name: 'dob_in_figures', rules: [{ required: true }], element: (data) => <Input type='date' {...data} /> },
            { label: 'Date of Birth in Words', name: 'dob_in_words', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            {
                label: 'Additional Subject',
                name: 'additional_subject',
                rules: [{ required: true }],
                dataObj: {
                    options: [
                        { label: 'Maths', value: 'maths' },
                        { label: 'Home Science', value: 'home science' },
                        { label: 'Maithili', value: 'maithili' },
                        { label: 'Music', value: 'music' },
                        { label: 'Economics', value: 'economics' },
                        { label: 'Porohitya', value: 'porohitya' },
                        { label: 'Bhojpuri', value: 'bhojpuri' }
                    ]
                },
                element: (data) => <Select {...data} />
            },
            {
                label: 'Gender',
                name: 'gender',
                rules: [{ required: true }],
                dataObj: {
                    options: [
                        { label: 'Male', value: 'male' },
                        { label: 'Female', value: 'female' },
                        { label: 'Transgender', value: 'transgender' }
                    ]
                },
                element: (data) => <Select {...data} />
            },
            {
                label: 'Caste Category',
                name: 'caste_category',
                rules: [{ required: true }],
                dataObj: {
                    options: [
                        { label: 'General', value: 'general' },
                        { label: 'BC1', value: 'bc1' },
                        { label: 'BC2', value: 'bc2' },
                        { label: 'SC', value: 'sc' },
                        { label: 'ST', value: 'st' }
                    ]
                },
                element: (data) => <Select {...data} />
            },
            { label: 'Student Address Mohalla', name: 'student_address_mohalla', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Student Address PO', name: 'student_address_po', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Student Address Sub Division', name: 'student_address_sub_div', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Student Address Pin', name: 'student_address_pin', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Student Address PS', name: 'student_address_ps', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Student Address District', name: 'student_address_dist', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            { label: 'Student Aadhar Number', name: 'student_aadhar_number', rules: [{ required: true }], element: (data) => <Input {...data} /> },
            {
                label: 'Nationality',
                name: 'nationality',
                rules: [{ required: true }],
                dataObj: {
                    options: [
                        { label: 'Indian', value: 'indian' },
                        { label: 'Others', value: 'others' }
                    ]
                },
                element: (data) => <Select {...data} />
            },
            {
                label: 'Religion',
                name: 'religion',
                rules: [{ required: true }],
                dataObj: {
                    options: [
                        { label: 'Hindu', value: 'hindu' },
                        { label: 'Muslim', value: 'muslim' },
                        { label: 'Sikh', value: 'shikh' },
                        { label: 'Christian', value: 'christian' },
                        { label: 'Others', value: 'others' }
                    ]
                },
                element: (data) => <Select {...data} />
            },
            {
                label: 'Handicapped',
                name: 'handicapped',
                rules: [{ required: true }],
                dataObj: {
                    options: [
                        { label: 'None', value: 'none' },
                        { label: 'Blind', value: 'blind' },
                        { label: 'Deaf', value: 'deaf' },
                        { label: 'Physically Handicapped', value: 'physically handicapped' },
                        { label: 'Dystixc', value: 'dystixc' },
                        { label: 'Spastic', value: 'spastic' }
                    ]
                },
                element: (data) => <Select {...data} />
            },
            {
                label: 'Student Category',
                name: 'student_category',
                rules: [{ required: true }],
                dataObj: {
                    options: [
                        { label: 'Regular', value: 'regular' },
                        { label: 'Private', value: 'private' },
                        { label: 'Ex', value: 'ex' }
                    ]
                },
                element: (data) => <Select {...data} />
            },
    ];


    return (
        <Card
            size="small"
            title="Student Information"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default S_Info