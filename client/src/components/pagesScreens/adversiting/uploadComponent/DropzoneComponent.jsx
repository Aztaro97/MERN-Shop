import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { GiCheckMark } from "react-icons/gi";
import { IoClose, IoCloudUploadOutline } from "react-icons/io5";
import styled from "styled-components";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default function DropZoneComponent({
  name,
  style,
  accept,
  multiple,
  maxFiles,
  setFiles,
  files
  
}) {
  // const [files, setFiles] = useState([]);
  // const [imageUrl, setImageUrl] = useState(null)
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: accept,
    multiple: multiple,
    maxFiles: maxFiles,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    //   maxSize: 130979,
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
    </div>
  ));

  // const imageUrl = files.map((file) => file.preview);

  return (
    <>
      <DropZone
        {...getRootProps({ className: "dropzone" })}
        // imageUrl={imageUrl}
        style={style}
      >
        <input {...getInputProps()} type="file" name={name} />
        {acceptedFiles.length === 0 && fileRejections.length == 0 && (
          <>
            <IoCloudUploadOutline className="upload_icon" />

            <p>Drag & drop file here, or click to select file</p>
          </>
        )}
        {acceptedFiles.length > 0 && (
          <>
            <GiCheckMark className="accept_icon" />
          </>
        )}
        {fileRejections.length > 0 && (
          <>
            <IoClose className="reject_icon" />
            <p className="alert_danger"> {fileRejectionItems} </p>
          </>
        )}
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </DropZone>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </>
  );
}

const DropZone = styled.div`
  padding: 1rem;
  background: #ececec;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 3px dotted var(--orange-color);
  & .upload_icon,
  & .accept_icon,
  & .reject_icon {
    font-size: 2rem;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 50%;
  }
  & .upload_icon {
    border: 1px solid var(--orange-color);
    color: var(--orange-color);
  }
  & .accept_icon {
    color: #fff;
    background: #2ecc71;
  }
  & .reject_icon {
    color: #fff !important;
    background: #dc3545;
  }
  & .alert_danger {
    color: #dc3545 !important;
  }
  & p,
  em {
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin: 0;
  }

  & .price {
    background: var(--orange-color);
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 5px;
    & p {
      margin: 0;
      color: #fff;
      text-transform: capitalize;
      font-weight: 400;
      font-family: monospace;
    }
  }
`;
