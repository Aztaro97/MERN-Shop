import { Upload } from "antd";
import React from "react";
import styled from "styled-components";

const UploadComponent =  ({ fileList, setFileList, maxFile, name, uploadChild }) => {


  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  return (
    <UploadTyling
      name={name}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
    >
      {fileList.length < 5 && "+ Upload"}
    </UploadTyling>
  );
}

const UploadTyling = styled(Upload)`
  /* border: 1px solid var(--orange-color); */
`;

export default UploadComponent;
