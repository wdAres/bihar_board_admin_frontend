import { PlusCircleFilled } from '@ant-design/icons';
import { Upload, message } from 'antd';
import React from 'react';

const MyUpload = ({ setterFunc, list = [], limit }) => {
    const handleRemove = file => {
        setterFunc(prevFileList => {
            const index = prevFileList.indexOf(file);
            const newFileList = [...prevFileList];
            newFileList.splice(index, 1);
            return newFileList;
        });
    };

    function handleBeforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
            return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must be smaller than 2MB!');
            return false;
        }
        setterFunc(prevFileList => [...prevFileList, file]);
        return false;
    }

    const uploadButton = (
        <div>
            <PlusCircleFilled />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <Upload
            listType="picture-card"
            onRemove={handleRemove}
            beforeUpload={handleBeforeUpload}
            fileList={list}
            multiple={true} 
            showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }} // Show preview and remove icons
        >
            {list.length >= limit ? null : uploadButton}
        </Upload>
    );
};

export default MyUpload;
