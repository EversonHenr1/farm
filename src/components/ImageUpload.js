import React, { useState, useEffect, useRef } from 'react';
import Dropzone from 'react-dropzone';
import styles from "./css/ImageUpload.module.css"
import { FaImage } from 'react-icons/fa';

const ImageUpload = ({ parentOBJ }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const parentOBJRef = useRef(parentOBJ);

  useEffect(() => {
    if (selectedFile) {
      parentOBJRef.current(selectedFile);
    }
  }, [selectedFile]);

  const handleDrop = (acceptedFiles) => {
    const selected = acceptedFiles[0];
    setSelectedFile(selected);
  };

  return (
    <div className={styles.upload}>
      <Dropzone onDrop={handleDrop} accept={{ 'image/jpeg': ['.jpeg', '.png'] }} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded"
                style={{ maxWidth: '200px' }}
              />
            ) : (
              <>
                <FaImage />
                <p>Arraste e solte uma imagem (1920x720) aqui ou clique para selecionar.</p>
              </>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default ImageUpload;
