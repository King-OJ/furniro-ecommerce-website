"use client";
import { Upload } from "antd";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

const { Dragger } = Upload;

export default function DragAndDrop() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const beforeUploadHandler = (file) => {
    addFile(file);
    return false;
  };

  const addFile = (file) => {
    setSelectedFiles((currentSelection) => [...currentSelection, file]);
    console.log(file);
  };

  return (
    <Dragger
      multiple={true}
      //   onRemove={removeFile}
      showUploadList={true}
      listType="picture-card"
      beforeUpload={beforeUploadHandler}
      //   onPreview={handlePreview}
      accept="image/*"
    >
      <p className="mb-2 grid place-content-center">
        <BsPlus size={25} />
      </p>
      <p className="ant-upload-text">
        Click this area to select image or drag product image here
      </p>
    </Dragger>
  );
}
