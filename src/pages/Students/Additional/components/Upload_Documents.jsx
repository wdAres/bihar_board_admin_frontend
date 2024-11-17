import React, { useState } from 'react'
import { Button, Card, DatePicker, Flex, Input, message, Select, Space, Upload } from 'antd'
import classes from './Component.module.css'
import FormItem from '../../../../components/FormItem/FormItem'
import MyUpload from '../../../../components/MyUpload/MyUpload'
import { FaDumpster, FaPlus } from 'react-icons/fa'
import { checkFileSize, checkFileType, handleFile } from '../../../../utils/fileOperations'
import MyUpload2 from '../../../../components/MyUpload/MyUpload2'
const Upload_Docuements = () => {


    // const [studentPhoto, setStudentPhoto] = useState()


    const uploadButton = (
        <div>
            <FaPlus />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    const inputFields = [
        {
            label: 'Student Photo',
            name: 'student_photo',
            rules: [{ required: true }],
            // dataObj: {
            //     maxCount: 1,
            //     onChange: file => handleFile(file, setStudentPhoto),
            //     beforeUpload: file => {
            //         const fileType = checkFileType(file, 'image/png', 'image/jpeg', 'images/jpg')
            //         const fileSize = checkFileSize(file, 1)
            //         return false
            //     },
            //     showUploadList: true
            // },
            // element: (data) => <Upload  {...data}>
            //     <MyUpload2 file={studentPhoto} />
            // </Upload>
            dataObj: {
                maxCount: 1,
                listType:'picture-card',
                beforeUpload:x=>false
            },
            element: (data) => <Upload  {...data}>
                {uploadButton}
            </Upload>
        },
        {
            label: 'Student Signature',
            name: 'student_signature',
            rules: [{ required: true }],
            dataObj: {
                maxCount: 1,
                listType:'picture-card',
                beforeUpload:x=>false
            },
            element: (data) => <Upload  {...data}>
                {uploadButton}
            </Upload>
        },
        {
            label: 'Student Signature',
            name: 'student_signature',
            rules: [{ required: true }],
            dataObj: {
                maxCount: 1,
                listType:'picture-card',
                beforeUpload:x=>false
            },
            element: (data) => <Upload  {...data}>
                {uploadButton}
            </Upload>
        },
        {
            label: 'Student Parents Signature',
            name: 'parent_signature',
            rules: [{ required: true }],
            dataObj: {
                maxCount: 1,
                listType:'picture-card',
                beforeUpload:x=>false
            },
            element: (data) => <Upload  {...data}>
                {uploadButton}
            </Upload>
        },
        {
            label: 'School Principal Signature',
            name: 'school_principal_signature',
            rules: [{ required: true }],
            dataObj: {
                maxCount: 1,
                listType:'picture-card',
                beforeUpload:x=>false
            },
            element: (data) => <Upload  {...data}>
                {uploadButton}
            </Upload>
        },
        {
            label: 'Center Signature',
            name: 'center_signature',
            rules: [{ required: true }],
            dataObj: {
                maxCount: 1,
                listType:'picture-card',
                beforeUpload:x=>false
            },
            element: (data) => <Upload  {...data}>
                {uploadButton}
            </Upload>
        },
    ];


    return (
        <Card
            size="small"
            title="Upload Documents"
        >
            <div className={classes.card_body}>
                {inputFields.map(element => <FormItem key={element.name} {...element} />)}
            </div>
        </Card>
    )
}

export default Upload_Docuements