import { message } from "antd";

export const checkFileSize = (file, maxSizeInMB) => {
    const fileSizeInMB = file.size / 1024 / 1024;
    if (fileSizeInMB > maxSizeInMB) {
        message.error(`File size must be smaller than ${maxSizeInMB}MB!`);
        return false;
    }
    return true;
};


export const checkFileType = (file, ...expectedType) => {
    console.log(file)
    const fileType = file.type;
    const containFileType = expectedType.includes(fileType)
    if (!containFileType) {
        message.error(`You can only upload ${expectedType} files!`);
        return false;
    }
    return true;
};

export const handleFile = (info,setterFunc) => { 
    let files = [...info.fileList]; 
    setterFunc(files[0]);
}