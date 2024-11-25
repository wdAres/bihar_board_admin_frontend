import React from 'react'
import { Card, Input, Select } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
const S_Info = () => {

    const inputFields = [
        {
            label: 'School Name',
            name: 'school_name',
            rules: [
                { required: true, message: 'School Name is required' },
                { min: 2, message: 'School Name must be at least 2 characters' },
                { max: 50, message: 'School Name cannot exceed 50 characters' },
                { pattern: /^[a-zA-Z]+( [a-zA-Z]+)*$/, message: 'School Name should only contain one space between words' }
            ],
            element: (data) => <Input {...data} />
        },
        {
            label: 'School Mobile No',
            name: 'school_mobile_no',
            rules: [
                { required: true, message: 'School Mobile No is required' },
                { pattern: /^[0-9]{10}$/, message: 'School Mobile No must be a valid 10-digit number' }
            ],
            element: (data) => <Input {...data} />
        },
        {
            label: 'School Level',
            name: 'school_level',
            rules: [
                { required: true, message: 'School Level is required' }
            ],
            dataObj: {
                options: [
                    { label: 'Primary', value: 'primary' }, 
                    { label: 'Middle', value: 'middle' }, 
                    { label: 'Secondary', value: 'secondary' }, 
                    { label: 'Senior Secondary', value: 'senior secondary' }
                ]
            },
            element: (data) => <Select {...data} />
        },
        {
            label: 'School Category',
            name: 'school_category',
            rules: [
              { required: true, message: 'School category is required' }
            ],
            dataObj: {
              options: [
                { label: 'Category 429', value: '429' },
                { label: 'Category 223', value: '223' },
                { label: 'Category 3776', value: '3776' },
                { label: 'Category 711', value: '711' },
                { label: 'Category 69', value: '69' }
              ]
            },
            element: (data) => <Select {...data} />
          },
    ];
    
    return (
        <Card
            size="small"
            title="School Details"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default S_Info